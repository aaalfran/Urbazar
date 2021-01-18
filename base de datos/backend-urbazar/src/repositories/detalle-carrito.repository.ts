import {DefaultCrudRepository} from '@loopback/repository';
import {DetalleCarrito, DetalleCarritoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetalleCarritoRepository extends DefaultCrudRepository<
  DetalleCarrito,
  typeof DetalleCarrito.prototype.idDetalle,
  DetalleCarritoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(DetalleCarrito, dataSource);
  }
}
