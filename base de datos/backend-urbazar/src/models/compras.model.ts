import {Entity, model, property} from '@loopback/repository';

@model()
export class Compras extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_categoria: string;

  @property({
    type: 'string',
    required: true,
  })
  comprador: string;

  @property({
    type: 'string',
    required: true,
  })
  vendedor: string;

  @property({
    type: 'string',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  producto: string;

  @property({
    type: 'string',
    required: true,
  })
  precio: string;

  @property({
    type: 'string',
    required: true,
  })
  cantidad: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;


  constructor(data?: Partial<Compras>) {
    super(data);
  }
}

export interface ComprasRelations {
  // describe navigational properties here
}

export type ComprasWithRelations = Compras & ComprasRelations;
