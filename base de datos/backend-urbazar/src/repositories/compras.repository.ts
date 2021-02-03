import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Compras, ComprasRelations} from '../models';

export class ComprasRepository extends DefaultCrudRepository<
  Compras,
  typeof Compras.prototype._id,
  ComprasRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Compras, dataSource);
  }
}
