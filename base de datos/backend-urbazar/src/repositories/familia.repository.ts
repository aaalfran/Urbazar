import {DefaultCrudRepository} from '@loopback/repository';
import {Familia, FamiliaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FamiliaRepository extends DefaultCrudRepository<
  Familia,
  typeof Familia.prototype.id,
  FamiliaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Familia, dataSource);
  }
}
