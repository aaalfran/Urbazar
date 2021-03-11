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
import {AdministradorEtapas} from '../models';
import {AdministradorEtapasRepository} from '../repositories';

export class AdministradorEtapaController {
  constructor(
    @repository(AdministradorEtapasRepository)
    public administradorEtapasRepository : AdministradorEtapasRepository,
  ) {}

  @post('/administrador-etapas')
  @response(200, {
    description: 'AdministradorEtapas model instance',
    content: {'application/json': {schema: getModelSchemaRef(AdministradorEtapas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdministradorEtapas, {
            title: 'NewAdministradorEtapas',
            exclude: ['id'],
          }),
        },
      },
    })
    administradorEtapas: Omit<AdministradorEtapas, 'id'>,
  ): Promise<AdministradorEtapas> {
    return this.administradorEtapasRepository.create(administradorEtapas);
  }

  @get('/administrador-etapas/count')
  @response(200, {
    description: 'AdministradorEtapas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AdministradorEtapas) where?: Where<AdministradorEtapas>,
  ): Promise<Count> {
    return this.administradorEtapasRepository.count(where);
  }

  @get('/administrador-etapas')
  @response(200, {
    description: 'Array of AdministradorEtapas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AdministradorEtapas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AdministradorEtapas) filter?: Filter<AdministradorEtapas>,
  ): Promise<AdministradorEtapas[]> {
    return this.administradorEtapasRepository.find(filter);
  }

  @patch('/administrador-etapas')
  @response(200, {
    description: 'AdministradorEtapas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdministradorEtapas, {partial: true}),
        },
      },
    })
    administradorEtapas: AdministradorEtapas,
    @param.where(AdministradorEtapas) where?: Where<AdministradorEtapas>,
  ): Promise<Count> {
    return this.administradorEtapasRepository.updateAll(administradorEtapas, where);
  }

  @get('/administrador-etapas/{id}')
  @response(200, {
    description: 'AdministradorEtapas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AdministradorEtapas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AdministradorEtapas, {exclude: 'where'}) filter?: FilterExcludingWhere<AdministradorEtapas>
  ): Promise<AdministradorEtapas> {
    return this.administradorEtapasRepository.findById(id, filter);
  }

  @patch('/administrador-etapas/{id}')
  @response(204, {
    description: 'AdministradorEtapas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AdministradorEtapas, {partial: true}),
        },
      },
    })
    administradorEtapas: AdministradorEtapas,
  ): Promise<void> {
    await this.administradorEtapasRepository.updateById(id, administradorEtapas);
  }

  @put('/administrador-etapas/{id}')
  @response(204, {
    description: 'AdministradorEtapas PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() administradorEtapas: AdministradorEtapas,
  ): Promise<void> {
    await this.administradorEtapasRepository.replaceById(id, administradorEtapas);
  }

  @del('/administrador-etapas/{id}')
  @response(204, {
    description: 'AdministradorEtapas DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.administradorEtapasRepository.deleteById(id);
  }
}
