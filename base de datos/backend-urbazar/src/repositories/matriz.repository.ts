import {DefaultCrudRepository} from '@loopback/repository';
import {Matriz, MatrizRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MatrizRepository extends DefaultCrudRepository<
  Matriz,
  typeof Matriz.prototype.id,
  MatrizRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Matriz, dataSource);
  }
}
