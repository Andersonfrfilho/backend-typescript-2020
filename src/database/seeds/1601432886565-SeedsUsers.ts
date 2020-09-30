import {
  MigrationInterface,
  QueryRunner,
  getRepository,
  getConnection,
} from 'typeorm';
import userSeed from '../factory/user.seed';

export default class SeedsUsers1601432886565 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getConnection('seed').getRepository('users').save(userSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getConnection('seed').getRepository('users').clear();
  }
}
