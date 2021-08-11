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
import {Carrito} from '../models';
import {CarritoRepository} from '../repositories';

export class CarritoController {
  constructor(
    @repository(CarritoRepository)
    public carritoRepository : CarritoRepository,
  ) {}

  @post('/carrito', {
    responses: {
      '200': {
        description: 'Carrito model instance',
        content: {'application/json': {schema: getModelSchemaRef(Carrito)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carrito, {
            title: 'NewCarrito',
            
          }),
        },
      },
    })
    carrito: Carrito,
  ): Promise<Carrito> {
    return this.carritoRepository.create(carrito);
  }

  @get('/carrito/count', {
    responses: {
      '200': {
        description: 'Carrito model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Carrito) where?: Where<Carrito>,
  ): Promise<Count> {
    return this.carritoRepository.count(where);
  }

  @get('/carrito', {
    responses: {
      '200': {
        description: 'Array of Carrito model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Carrito, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Carrito) filter?: Filter<Carrito>,
  ): Promise<Carrito[]> {
    return this.carritoRepository.find(filter);
  }

  @patch('/carrito', {
    responses: {
      '200': {
        description: 'Carrito PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carrito, {partial: true}),
        },
      },
    })
    carrito: Carrito,
    @param.where(Carrito) where?: Where<Carrito>,
  ): Promise<Count> {
    return this.carritoRepository.updateAll(carrito, where);
  }

  @get('/carrito/{id}', {
    responses: {
      '200': {
        description: 'Carrito model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Carrito, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Carrito, {exclude: 'where'}) filter?: FilterExcludingWhere<Carrito>
  ): Promise<Carrito> {
    return this.carritoRepository.findById(id, filter);
  }


  @get('/carrito/cliente/{id}', {
    responses: {
      '200' : {
        description: 'Success',
        content: {'application/json': {schema: getModelSchemaRef(Carrito)}},
      },
    },
  })
  async findByIdPersona(
    @param.path.number('id') id: number,
  ): Promise<Carrito[]> {
    return this.carritoRepository.find({where : {idUsuario :id}});
  }
  
  @patch('/carrito/{id}', {
    responses: {
      '204': {
        description: 'Carrito PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Carrito, {partial: true}),
        },
      },
    })
    carrito: Carrito,
  ): Promise<void> {
    await this.carritoRepository.updateById(id, carrito);
  }

  @put('/carrito/{id}', {
    responses: {
      '204': {
        description: 'Carrito PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() carrito: Carrito,
  ): Promise<void> {
    await this.carritoRepository.replaceById(id, carrito);
  }

  @del('/carrito/{id}', {
    responses: {
      '204': {
        description: 'Carrito DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.carritoRepository.deleteById(id);
  }
}
