import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'urbazar', table: 'historico_administrador_urbanizacion'}
  }
})
export class HistoricoAdministradorUrbanizacion extends Entity {
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
    mysql: {columnName: 'ID_Administrador_Urbanizacion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idAdministradorUrbanizacion: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'Fecha_Inicio', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  fechaInicio: string;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'Fecha_final', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  fechaFinal: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HistoricoAdministradorUrbanizacion>) {
    super(data);
  }
}

export interface HistoricoAdministradorUrbanizacionRelations {
  // describe navigational properties here
}

export type HistoricoAdministradorUrbanizacionWithRelations = HistoricoAdministradorUrbanizacion & HistoricoAdministradorUrbanizacionRelations;
