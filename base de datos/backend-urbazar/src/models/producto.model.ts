import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'urbazar', table: 'producto'}}})
export class Producto extends Entity {
  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    generated: true,
    forceId: true,
    id: 1,
    mysql: {columnName: 'ID', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ID_vendedor', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idVendedor: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'Nombre', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Precio', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
    precision: 3,
    scale: 0,
    mysql: {columnName: 'Activo', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  activo: number;

  @property({
    type: 'string',
    required: true,
    length: 200,
    mysql: {columnName: 'Descripcion', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Stock', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  stock: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Promedio_Puntuacion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  promedioPuntuacion: number;

  @property({
    type: 'number',
    required: true,
    precision: 3,
    scale: 0,
    mysql: {columnName: 'Pedido_Anticipado', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  pedidoAnticipado: number;

  @property({
    type: 'string',
    required: true,
    length: 300,
    mysql: {columnName: 'source', dataType: 'varchar', dataLength: 300, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  source: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
