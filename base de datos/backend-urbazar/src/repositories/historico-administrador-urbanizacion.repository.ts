import {DefaultCrudRepository} from '@loopback/repository';
import {HistoricoAdministradorUrbanizacion, HistoricoAdministradorUrbanizacionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HistoricoAdministradorUrbanizacionRepository extends DefaultCrudRepository<
  HistoricoAdministradorUrbanizacion,
  typeof HistoricoAdministradorUrbanizacion.prototype.id,
  HistoricoAdministradorUrbanizacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(HistoricoAdministradorUrbanizacion, dataSource);
  }
}
