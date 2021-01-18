import {DefaultCrudRepository} from '@loopback/repository';
import {MetodoDePago, MetodoDePagoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MetodoDePagoRepository extends DefaultCrudRepository<
  MetodoDePago,
  typeof MetodoDePago.prototype.id,
  MetodoDePagoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(MetodoDePago, dataSource);
  }
}
