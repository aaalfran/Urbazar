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
import {Sources} from '../models';
import {SourcesRepository} from '../repositories';

export class SourcesController {
  constructor(
    @repository(SourcesRepository)
    public sourcesRepository : SourcesRepository,
  ) {}

  @post('/sourcesproductos')
  @response(200, {
    description: 'Sources model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sources)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sources, {
            title: 'NewSources',
            
          }),
        },
      },
    })
    sources: Sources,
  ): Promise<Sources> {
    return this.sourcesRepository.create(sources);
  }

  @get('/sourcesproductos/count')
  @response(200, {
    description: 'Sources model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sources) where?: Where<Sources>,
  ): Promise<Count> {
    return this.sourcesRepository.count(where);
  }

  @get('/sourcesproductos')
  @response(200, {
    description: 'Array of Sources model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sources, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sources) filter?: Filter<Sources>,
  ): Promise<Sources[]> {
    return this.sourcesRepository.find(filter);
  }

  @patch('/sourcesproductos')
  @response(200, {
    description: 'Sources PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sources, {partial: true}),
        },
      },
    })
    sources: Sources,
    @param.where(Sources) where?: Where<Sources>,
  ): Promise<Count> {
    return this.sourcesRepository.updateAll(sources, where);
  }

  @get('/sourcesproductos/{id}')
  @response(200, {
    description: 'Sources model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sources, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Sources, {exclude: 'where'}) filter?: FilterExcludingWhere<Sources>
  ): Promise<Sources> {
    return this.sourcesRepository.findById(id, filter);
  }

  @patch('/sourcesproductos/{id}')
  @response(204, {
    description: 'Sources PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sources, {partial: true}),
        },
      },
    })
    sources: Sources,
  ): Promise<void> {
    await this.sourcesRepository.updateById(id, sources);
  }

  @put('/sourcesproductos/{id}')
  @response(204, {
    description: 'Sources PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sources: Sources,
  ): Promise<void> {
    await this.sourcesRepository.replaceById(id, sources);
  }

  @del('/sourcesproductos/{id}')
  @response(204, {
    description: 'Sources DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sourcesRepository.deleteById(id);
  }
}
