import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mysql: {schema: 'urbazar', table: 'historico_administrador_etapa'}
  }
})
export class HistoricoAdministradorEtapa extends Entity {
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
    mysql: {columnName: 'ID-Administrador_Etapa', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  idAdministradorEtapa: number;

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

  constructor(data?: Partial<HistoricoAdministradorEtapa>) {
    super(data);
  }
}

export interface HistoricoAdministradorEtapaRelations {
  // describe navigational properties here
}

export type HistoricoAdministradorEtapaWithRelations = HistoricoAdministradorEtapa & HistoricoAdministradorEtapaRelations;
