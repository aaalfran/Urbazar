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
import {Familia} from '../models';
import {FamiliaRepository} from '../repositories';

export class FamiliaController {
  constructor(
    @repository(FamiliaRepository)
    public familiaRepository : FamiliaRepository,
  ) {}

  @post('/familias')
  @response(200, {
    description: 'Familia model instance',
    content: {'application/json': {schema: getModelSchemaRef(Familia)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Familia, {
            title: 'NewFamilia',
            
          }),
        },
      },
    })
    familia: Familia,
  ): Promise<Familia> {
    return this.familiaRepository.create(familia);
  }

  @get('/familias/count')
  @response(200, {
    description: 'Familia model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Familia) where?: Where<Familia>,
  ): Promise<Count> {
    return this.familiaRepository.count(where);
  }

  @get('/familias')
  @response(200, {
    description: 'Array of Familia model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Familia, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Familia) filter?: Filter<Familia>,
  ): Promise<Familia[]> {
    return this.familiaRepository.find(filter);
  }

  @patch('/familias')
  @response(200, {
    description: 'Familia PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Familia, {partial: true}),
        },
      },
    })
    familia: Familia,
    @param.where(Familia) where?: Where<Familia>,
  ): Promise<Count> {
    return this.familiaRepository.updateAll(familia, where);
  }

  @get('/familias/{id}')
  @response(200, {
    description: 'Familia model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Familia, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Familia, {exclude: 'where'}) filter?: FilterExcludingWhere<Familia>
  ): Promise<Familia> {
    return this.familiaRepository.findById(id, filter);
  }

  @patch('/familias/{id}')
  @response(204, {
    description: 'Familia PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Familia, {partial: true}),
        },
      },
    })
    familia: Familia,
  ): Promise<void> {
    await this.familiaRepository.updateById(id, familia);
  }

  @put('/familias/{id}')
  @response(204, {
    description: 'Familia PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() familia: Familia,
  ): Promise<void> {
    await this.familiaRepository.replaceById(id, familia);
  }

  @del('/familias/{id}')
  @response(204, {
    description: 'Familia DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.familiaRepository.deleteById(id);
  }
}
