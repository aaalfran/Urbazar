import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'urbazar', table: 'detalle_venta'}}
})
export class DetalleVenta extends Entity {
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
    mysql: {columnName: 'iD_Venta', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  iDVenta: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ID_Producto', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idProducto: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Costo_Unitario', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  costoUnitario: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Costo_Envio', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  costoEnvio: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'Costo_Total', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  costoTotal: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DetalleVenta>) {
    super(data);
  }
}

export interface DetalleVentaRelations {
  // describe navigational properties here
}

export type DetalleVentaWithRelations = DetalleVenta & DetalleVentaRelations;
