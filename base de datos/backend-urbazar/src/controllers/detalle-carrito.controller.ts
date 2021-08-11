import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {DetalleCarrito} from '../models';
import {DetalleCarritoRepository} from '../repositories';

export class DetalleCarritoController {
  constructor(
    @repository(DetalleCarritoRepository)
    public detalleCarritoRepository : DetalleCarritoRepository,
  ) {}

  @post('/detalle-carrito', {
    responses: {
      '200': {
        description: 'DetalleCarrito model instance',
        content: {'application/json': {schema: getModelSchemaRef(DetalleCarrito)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleCarrito, {
            title: 'NewDetalleCarrito',
            
          }),
        },
      },
    })
    detalleCarrito: DetalleCarrito,
  ): Promise<DetalleCarrito> {
    return this.detalleCarritoRepository.create(detalleCarrito);
  }

  @get('/detalle-carrito/count', {
    responses: {
      '200': {
        description: 'DetalleCarrito model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DetalleCarrito) where?: Where<DetalleCarrito>,
  ): Promise<Count> {
    return this.detalleCarritoRepository.count(where);
  }

  @get('/detalle-carrito', {
    responses: {
      '200': {
        description: 'Array of DetalleCarrito model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DetalleCarrito, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DetalleCarrito) filter?: Filter<DetalleCarrito>,
  ): Promise<DetalleCarrito[]> {
    return this.detalleCarritoRepository.find(filter);
  }

  @patch('/detalle-carrito', {
    responses: {
      '200': {
        description: 'DetalleCarrito PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleCarrito, {partial: true}),
        },
      },
    })
    detalleCarrito: DetalleCarrito,
    @param.where(DetalleCarrito) where?: Where<DetalleCarrito>,
  ): Promise<Count> {
    return this.detalleCarritoRepository.updateAll(detalleCarrito, where);
  }

  @get('/detalle-carrito/carrito/{id}', {
    responses: {
      '200' : {
        description: 'Success',
        content: {'application/json': {schema: getModelSchemaRef(DetalleCarrito)}},
      },
    },
  })
  async findByIdPersona(
    @param.path.number('id') id: number,
  ): Promise<DetalleCarrito[]> {
    return this.detalleCarritoRepository.find({where : {idCarrito :id}});
  }

  @get('/detalle-carrito/{id}', {
    responses: {
      '200': {
        description: 'DetalleCarrito model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DetalleCarrito, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DetalleCarrito, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleCarrito>
  ): Promise<DetalleCarrito> {
    return this.detalleCarritoRepository.findById(id, filter);
  }

  @patch('/detalle-carrito/{id}', {
    responses: {
      '204': {
        description: 'DetalleCarrito PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DetalleCarrito, {partial: true}),
        },
      },
    })
    detalleCarrito: DetalleCarrito,
  ): Promise<void> {
    await this.detalleCarritoRepository.updateById(id, detalleCarrito);
  }

  @put('/detalle-carrito/{id}', {
    responses: {
      '204': {
        description: 'DetalleCarrito PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() detalleCarrito: DetalleCarrito,
  ): Promise<void> {
    await this.detalleCarritoRepository.replaceById(id, detalleCarrito);
  }

  @del('/detalle-carrito/{id}', {
    responses: {
      '204': {
        description: 'DetalleCarrito DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.detalleCarritoRepository.deleteById(id);
  }
}
