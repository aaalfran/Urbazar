import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'urbazar', table: 'persona'}}})
export class Persona extends Entity {
  @property({
    type: 'number',
    generated: true,
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
    mysql: {columnName: 'Identificacion', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  identificacion: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'id_etapa', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id_etapa: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 13,
    mysql: {columnName: 'Telefono', dataType: 'varchar', dataLength: 13, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'Correo', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  correo: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Edad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  edad: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'Genero', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  genero: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'Username', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  username: string;


  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'Contrasena', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  contrasena: string;

  @property({
    type: 'number',
    required: true,
    precision: 3,
    scale: 0,
    mysql: {columnName: 'Role', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  role: string;

  @property({
    type: 'number',
    required: false,
    precision: 3,
    scale: 0,
    default: 1,
    mysql: {columnName: 'Activo', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  activo: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'vendedorTipo', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: true},
  })
  vendedorTipo: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
