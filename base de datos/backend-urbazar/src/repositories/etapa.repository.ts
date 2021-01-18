import {DefaultCrudRepository} from '@loopback/repository';
import {Etapa, EtapaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EtapaRepository extends DefaultCrudRepository<
  Etapa,
  typeof Etapa.prototype.id,
  EtapaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Etapa, dataSource);
  }
}
