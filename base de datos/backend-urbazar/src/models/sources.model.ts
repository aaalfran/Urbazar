import {Entity, model, property} from '@loopback/repository';

@model()
export class Sources extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_producto: number;

  @property({
    type: 'string',
    required: true,
  })
  source: string;


  constructor(data?: Partial<Sources>) {
    super(data);
  }
}

export interface SourcesRelations {
  // describe navigational properties here
}

export type SourcesWithRelations = Sources & SourcesRelations;
