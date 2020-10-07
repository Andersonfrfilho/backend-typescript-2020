import { getConnection, MigrationInterface, QueryRunner } from 'typeorm';
import factories from '../factories';

export default class CommentsSeeds1601957881170 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const commentFactory = new factories.Comment();
    const comments = commentFactory.generate({ quantity: 5 });
    const users: any = await getConnection('seed')
      .getRepository('users')
      .find();
    const posts: any = await getConnection('seed')
      .getRepository('posts')
      .find();
    const relationshipUsersPostsComments = comments.map(comment => {
      return {
        ...comment,
        author_id: users[Math.floor(Math.random() * users.length)].id,
        post_id: posts[Math.floor(Math.random() * posts.length)].id,
      };
    });
    await getConnection('seed')
      .getRepository('comments')
      .save(relationshipUsersPostsComments);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getConnection('seed').getRepository('comments').delete({});
  }
}
