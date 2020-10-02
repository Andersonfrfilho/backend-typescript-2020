import {
  MigrationInterface,
  QueryRunner,
  getRepository,
  getConnection,
} from 'typeorm';
import { users } from '../factory';

export default class SeedsImages1601432886565 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const data = users({ number: 5 });
    await getConnection('seed').getRepository('users').save(data);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getConnection('seed').getRepository('users').delete({});
  }
}
