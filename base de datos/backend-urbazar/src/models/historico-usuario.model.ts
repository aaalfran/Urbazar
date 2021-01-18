import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'urbazar', table: 'historico_usuario'}}
})
export class HistoricoUsuario extends Entity {
  @property({
    type: 'number',
    id: 1,
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ID_Usuario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idUsuario: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'Fecha_Inicio', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  fechaInicio: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'Fecha_Final', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  fechaFinal: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HistoricoUsuario>) {
    super(data);
  }
}

export interface HistoricoUsuarioRelations {
  // describe navigational properties here
}

export type HistoricoUsuarioWithRelations = HistoricoUsuario & HistoricoUsuarioRelations;
