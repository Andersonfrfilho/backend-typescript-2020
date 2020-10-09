import { getConnection, MigrationInterface } from 'typeorm';
import factories from '../factories';

export default class PostsSeeds1601957871571 implements MigrationInterface {
  public async up(): Promise<void> {
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

  public async down(): Promise<void> {
    await getConnection('seed').getRepository('posts').delete({});
  }
}
