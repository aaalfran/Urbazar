import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'urbazar', table: 'urbanizacion'}}
})
export class Urbanizacion extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'nombre', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'Ubicacion', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ubicacion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Urbanizacion>) {
    super(data);
  }
}

export interface UrbanizacionRelations {
  // describe navigational properties here
}

export type UrbanizacionWithRelations = Urbanizacion & UrbanizacionRelations;
