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
  RestBindings,
  param,
  get,
  Request,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  HttpErrors,
} from '@loopback/rest';
import {Persona} from '../models';
import {PersonaRepository} from '../repositories';
import {inject} from '@loopback/core';
import {AuthService} from "../services/auth.service";

class Credentials{
  username: string;
  password: string;
}

export class PersonaController {

  authService: AuthService;

  constructor(
    @repository(PersonaRepository)
    public personaRepository : PersonaRepository,
    @inject(RestBindings.Http.REQUEST) 
    private request: Request,
  ) {
    this.authService = new AuthService(this.personaRepository);
  }

  @post("/login", {
    responses:{
      "200":{
        description: "Login para usuarios"
      }
    }
  })
  async login(
    @requestBody() credentials: Credentials
  ): Promise<object>{
    let persona = await this.authService.Identify(credentials.username, credentials.password);
    console.log(persona)
    if (persona){
      let tk = await this.authService.generateToken(persona);
      return {
        data: persona,
        token: tk
      }
      
    }else{
      throw new HttpErrors[401]("User or Password invalid.")


    }

  }

  @post('/personas', {
    responses: {
      '200': {
        description: 'Persona model instance',
        content: {'application/json': {
          schema: getModelSchemaRef(Persona)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {
            title: 'NewPersona',
            
          }),
        },
      },
    })
    persona: Persona,
  ){
    this.personaRepository.create(persona);
  }

  @get('/personas/count', {
    responses: {
      '200': {
        description: 'Persona model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Persona) where?: Where<Persona>,
  ): Promise<Count> {
    return this.personaRepository.count(where);
  }

  @get('/personas', {
    responses: {
      '200': {
        description: 'Array of Persona model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Persona, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Persona) filter?: Filter<Persona>,
  ): Promise<Persona[]> {
    return this.personaRepository.find(filter);
  }


  @patch('/personas', {
    responses: {
      '200': {
        description: 'Persona PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {partial: true}),
        },
      },
    })
    persona: Persona,
    @param.where(Persona) where?: Where<Persona>,
  ): Promise<Count> {
    return this.personaRepository.updateAll(persona, where);
  }

  @get('/personas/{id}', {
    responses: {
      '200': {
        description: 'Persona model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Persona, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Persona, {exclude: 'where'}) filter?: FilterExcludingWhere<Persona>
  ): Promise<Persona> {
    return this.personaRepository.findById(id, filter);
  }

  @patch('/personas/{id}', {
    responses: {
      '204': {
        description: 'Persona PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {partial: true}),
        },
      },
    })
    persona: Persona,
  ): Promise<void> {
    await this.personaRepository.updateById(id, persona);
  }

  @put('/personas/{id}', {
    responses: {
      '204': {
        description: 'Persona PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() persona: Persona,
  ): Promise<void> {
    await this.personaRepository.replaceById(id, persona);
  }

  @del('/personas/{id}', {
    responses: {
      '204': {
        description: 'Persona DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personaRepository.deleteById(id);
  }
}
