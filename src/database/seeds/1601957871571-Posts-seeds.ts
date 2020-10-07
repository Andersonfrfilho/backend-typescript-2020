import { getConnection, MigrationInterface, QueryRunner } from 'typeorm';
import factories from '../factories';
import User from '../../models/User';

export default class PostsSeeds1601957871571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const postFactory = new factories.Post();
    const posts = postFactory.generate({ quantity: 5 });
    const users: any = await getConnection('seed')
      .getRepository('users')
      .find();
    const relationshipUsersPosts = posts.map(post => {
      return {
        ...post,
        author_id: users[Math.floor(Math.random() * users.length)].id,
      };
    });
    await getConnection('seed')
      .getRepository('posts')
      .save(relationshipUsersPosts);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getConnection('seed').getRepository('posts').delete({});
  }
}
