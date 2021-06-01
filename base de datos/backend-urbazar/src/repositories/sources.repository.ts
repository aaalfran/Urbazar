import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Sources, SourcesRelations} from '../models';

export class SourcesRepository extends DefaultCrudRepository<
  Sources,
  typeof Sources.prototype.id,
  SourcesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Sources, dataSource);
  }
}
