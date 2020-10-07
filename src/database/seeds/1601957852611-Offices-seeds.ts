import { getConnection, MigrationInterface, QueryRunner } from 'typeorm';
import factories from '../factories';

export default class OfficesSeeds1601957852611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const officeFactory = new factories.Office();
    const offices = officeFactory.generate({ quantity: 5 });
    await getConnection('seed').getRepository('offices').save(offices);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getConnection('seed').getRepository('offices').delete({});
  }
}
