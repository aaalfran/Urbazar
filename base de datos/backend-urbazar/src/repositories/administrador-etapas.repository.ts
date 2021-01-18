import {DefaultCrudRepository} from '@loopback/repository';
import {AdministradorEtapas, AdministradorEtapasRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AdministradorEtapasRepository extends DefaultCrudRepository<
  AdministradorEtapas,
  typeof AdministradorEtapas.prototype.id,
  AdministradorEtapasRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(AdministradorEtapas, dataSource);
  }
}
