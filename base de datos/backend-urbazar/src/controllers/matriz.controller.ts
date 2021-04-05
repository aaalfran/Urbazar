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
import {Matriz} from '../models';
import {MatrizRepository} from '../repositories';

export class MatrizController {
  constructor(
    @repository(MatrizRepository)
    public matrizRepository : MatrizRepository,
  ) {}

  @post('/matriz', {
    responses: {
      '200': {
        description: 'Matriz model instance',
        content: {'application/json': {schema: getModelSchemaRef(Matriz)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Matriz, {
            title: 'NewMatriz',
            
          }),
        },
      },
    })
    matriz: Matriz,
  ): Promise<Matriz> {
    return this.matrizRepository.create(matriz);
  }

  @get('/matriz/count', {
    responses: {
      '200': {
        description: 'Matriz model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Matriz) where?: Where<Matriz>,
  ): Promise<Count> {
    return this.matrizRepository.count(where);
  }

  @get('/matriz', {
    responses: {
      '200': {
        description: 'Array of Matriz model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Matriz, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Matriz) filter?: Filter<Matriz>,
  ): Promise<Matriz[]> {
    return this.matrizRepository.find(filter);
  }

  @patch('/matriz', {
    responses: {
      '200': {
        description: 'Matriz PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Matriz, {partial: true}),
        },
      },
    })
    matriz: Matriz,
    @param.where(Matriz) where?: Where<Matriz>,
  ): Promise<Count> {
    return this.matrizRepository.updateAll(matriz, where);
  }

  @get('/matriz/{id}', {
    responses: {
      '200': {
        description: 'Matriz model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Matriz, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Matriz, {exclude: 'where'}) filter?: FilterExcludingWhere<Matriz>
  ): Promise<Matriz> {
    return this.matrizRepository.findById(id, filter);
  }

  @patch('/matriz/{id}', {
    responses: {
      '204': {
        description: 'Matriz PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Matriz, {partial: true}),
        },
      },
    })
    matriz: Matriz,
  ): Promise<void> {
    await this.matrizRepository.updateById(id, matriz);
  }

  @put('/matriz/{id}', {
    responses: {
      '204': {
        description: 'Matriz PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() matriz: Matriz,
  ): Promise<void> {
    await this.matrizRepository.replaceById(id, matriz);
  }

  @del('/matriz/{id}', {
    responses: {
      '204': {
        description: 'Matriz DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.matrizRepository.deleteById(id);
  }
}
