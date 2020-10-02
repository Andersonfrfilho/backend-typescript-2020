import { MigrationInterface, QueryRunner, getConnection } from 'typeorm';
import { image } from '../factory';

export default class SeedsImages1601432886565 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const data = image({ number: 5 });
    console.log(data);
    await getConnection('seed').getRepository('images').save(data);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getConnection('seed').getRepository('images').delete({});
  }
}
