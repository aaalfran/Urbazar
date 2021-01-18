import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'urbazar', table: 'familia'}}})
export class Familia extends Entity {
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
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ID_Etapa', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idEtapa: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'Apellido', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'Clave', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  clave: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Familia>) {
    super(data);
  }
}

export interface FamiliaRelations {
  // describe navigational properties here
}

export type FamiliaWithRelations = Familia & FamiliaRelations;
