import {DefaultCrudRepository} from '@loopback/repository';
import {HistoricoUsuario, HistoricoUsuarioRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HistoricoUsuarioRepository extends DefaultCrudRepository<
  HistoricoUsuario,
  typeof HistoricoUsuario.prototype.idUsuario,
  HistoricoUsuarioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(HistoricoUsuario, dataSource);
  }
}
