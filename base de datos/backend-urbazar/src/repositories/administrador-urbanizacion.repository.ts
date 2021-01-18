import {DefaultCrudRepository} from '@loopback/repository';
import {AdministradorUrbanizacion, AdministradorUrbanizacionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AdministradorUrbanizacionRepository extends DefaultCrudRepository<
  AdministradorUrbanizacion,
  typeof AdministradorUrbanizacion.prototype.id,
  AdministradorUrbanizacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(AdministradorUrbanizacion, dataSource);
  }
}
