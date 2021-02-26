import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'urbazar', table: 'metodo_de_pago'}}
})
export class MetodoDePago extends Entity {
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
    mysql: {columnName: 'cvv', dataType: 'varchar', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  cvv: number;

  
  @property({
    type: 'date',
    required: true,
    length: 100,
    mysql: {columnName: 'NombreMetodo', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  fecha: Date;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'NombreMetodo', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nombreMetodo: string;



  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ID_Cliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idCliente: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MetodoDePago>) {
    super(data);
  }
}

export interface MetodoDePagoRelations {
  // describe navigational properties here
}

export type MetodoDePagoWithRelations = MetodoDePago & MetodoDePagoRelations;
