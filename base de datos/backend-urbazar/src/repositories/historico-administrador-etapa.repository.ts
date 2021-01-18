import {DefaultCrudRepository} from '@loopback/repository';
import {HistoricoAdministradorEtapa, HistoricoAdministradorEtapaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HistoricoAdministradorEtapaRepository extends DefaultCrudRepository<
  HistoricoAdministradorEtapa,
  typeof HistoricoAdministradorEtapa.prototype.id,
  HistoricoAdministradorEtapaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(HistoricoAdministradorEtapa, dataSource);
  }
}
