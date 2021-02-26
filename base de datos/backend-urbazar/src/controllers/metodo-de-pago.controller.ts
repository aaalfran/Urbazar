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
  response,
} from '@loopback/rest';
import {MetodoDePago} from '../models';
import {MetodoDePagoRepository} from '../repositories';

export class MetodoDePagoController {
  constructor(
    @repository(MetodoDePagoRepository)
    public metodoDePagoRepository : MetodoDePagoRepository,
  ) {}

  @post('/metodo-de-pagos')
  @response(200, {
    description: 'MetodoDePago model instance',
    content: {'application/json': {schema: getModelSchemaRef(MetodoDePago)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetodoDePago, {
            title: 'NewMetodoDePago',
            
          }),
        },
      },
    })
    metodoDePago: MetodoDePago,
  ): Promise<MetodoDePago> {
    return this.metodoDePagoRepository.create(metodoDePago);
  }

  @get('/metodo-de-pagos/count')
  @response(200, {
    description: 'MetodoDePago model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MetodoDePago) where?: Where<MetodoDePago>,
  ): Promise<Count> {
    return this.metodoDePagoRepository.count(where);
  }

  @get('/metodo-de-pagos')
  @response(200, {
    description: 'Array of MetodoDePago model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MetodoDePago, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MetodoDePago) filter?: Filter<MetodoDePago>,
  ): Promise<MetodoDePago[]> {
    return this.metodoDePagoRepository.find(filter);
  }

  @patch('/metodo-de-pagos')
  @response(200, {
    description: 'MetodoDePago PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetodoDePago, {partial: true}),
        },
      },
    })
    metodoDePago: MetodoDePago,
    @param.where(MetodoDePago) where?: Where<MetodoDePago>,
  ): Promise<Count> {
    return this.metodoDePagoRepository.updateAll(metodoDePago, where);
  }

  @get('/metodo-de-pagos/{id}')
  @response(200, {
    description: 'MetodoDePago model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MetodoDePago, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(MetodoDePago, {exclude: 'where'}) filter?: FilterExcludingWhere<MetodoDePago>
  ): Promise<MetodoDePago> {
    return this.metodoDePagoRepository.findById(id, filter);
  }

  @patch('/metodo-de-pagos/{id}')
  @response(204, {
    description: 'MetodoDePago PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MetodoDePago, {partial: true}),
        },
      },
    })
    metodoDePago: MetodoDePago,
  ): Promise<void> {
    await this.metodoDePagoRepository.updateById(id, metodoDePago);
  }

  @put('/metodo-de-pagos/{id}')
  @response(204, {
    description: 'MetodoDePago PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() metodoDePago: MetodoDePago,
  ): Promise<void> {
    await this.metodoDePagoRepository.replaceById(id, metodoDePago);
  }

  @del('/metodo-de-pagos/{id}')
  @response(204, {
    description: 'MetodoDePago DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.metodoDePagoRepository.deleteById(id);
  }
}
