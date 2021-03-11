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
import {Etapa} from '../models';
import {EtapaRepository} from '../repositories';

export class EtapasController {
  constructor(
    @repository(EtapaRepository)
    public etapaRepository : EtapaRepository,
  ) {}

  @post('/etapas')
  @response(200, {
    description: 'Etapa model instance',
    content: {'application/json': {schema: getModelSchemaRef(Etapa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Etapa, {
            title: 'NewEtapa',
            
          }),
        },
      },
    })
    etapa: Etapa,
  ): Promise<Etapa> {
    return this.etapaRepository.create(etapa);
  }

  @get('/etapas/count')
  @response(200, {
    description: 'Etapa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Etapa) where?: Where<Etapa>,
  ): Promise<Count> {
    return this.etapaRepository.count(where);
  }

  @get('/etapas')
  @response(200, {
    description: 'Array of Etapa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Etapa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Etapa) filter?: Filter<Etapa>,
  ): Promise<Etapa[]> {
    return this.etapaRepository.find(filter);
  }

  @patch('/etapas')
  @response(200, {
    description: 'Etapa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Etapa, {partial: true}),
        },
      },
    })
    etapa: Etapa,
    @param.where(Etapa) where?: Where<Etapa>,
  ): Promise<Count> {
    return this.etapaRepository.updateAll(etapa, where);
  }

  @get('/etapas/{id}')
  @response(200, {
    description: 'Etapa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Etapa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Etapa, {exclude: 'where'}) filter?: FilterExcludingWhere<Etapa>
  ): Promise<Etapa> {
    return this.etapaRepository.findById(id, filter);
  }

  @patch('/etapas/{id}')
  @response(204, {
    description: 'Etapa PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Etapa, {partial: true}),
        },
      },
    })
    etapa: Etapa,
  ): Promise<void> {
    await this.etapaRepository.updateById(id, etapa);
  }

  @put('/etapas/{id}')
  @response(204, {
    description: 'Etapa PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() etapa: Etapa,
  ): Promise<void> {
    await this.etapaRepository.replaceById(id, etapa);
  }

  @del('/etapas/{id}')
  @response(204, {
    description: 'Etapa DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.etapaRepository.deleteById(id);
  }
}
