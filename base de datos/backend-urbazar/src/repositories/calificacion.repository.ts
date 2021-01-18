import {DefaultCrudRepository} from '@loopback/repository';
import {Calificacion, CalificacionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CalificacionRepository extends DefaultCrudRepository<
  Calificacion,
  typeof Calificacion.prototype.id,
  CalificacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Calificacion, dataSource);
  }
}
