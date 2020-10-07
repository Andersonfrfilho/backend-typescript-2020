import { image } from 'faker';
import { MigrationInterface, QueryRunner, getConnection } from 'typeorm';
import factories from '../factories';

export default class ImagesSeeds1601952892059 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const imagesFactory = new factories.Image();
    const images = imagesFactory.generate({ quantity: 5 });
    await getConnection('seed').getRepository('images').save(images);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getConnection('seed').getRepository('images').delete({});
  }
}
