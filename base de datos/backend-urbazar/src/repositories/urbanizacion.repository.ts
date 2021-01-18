import {DefaultCrudRepository} from '@loopback/repository';
import {Urbanizacion, UrbanizacionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UrbanizacionRepository extends DefaultCrudRepository<
  Urbanizacion,
  typeof Urbanizacion.prototype.id,
  UrbanizacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Urbanizacion, dataSource);
  }
}
