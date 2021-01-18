import {DefaultCrudRepository} from '@loopback/repository';
import {DetalleVenta, DetalleVentaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetalleVentaRepository extends DefaultCrudRepository<
  DetalleVenta,
  typeof DetalleVenta.prototype.id,
  DetalleVentaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(DetalleVenta, dataSource);
  }
}
