import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Matriz extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  data: string;

  @property({
    type: 'string',
    required: true,
  })
  urbanizacion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Matriz>) {
    super(data);
  }
}

export interface MatrizRelations {
  // describe navigational properties here
}

export type MatrizWithRelations = Matriz & MatrizRelations;
