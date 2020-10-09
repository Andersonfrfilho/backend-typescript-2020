import faker from 'faker';
import Comment from '@modules/comments/infra/typeorm/entities/Comment';

interface ICommentInterfaceFactory {
  quantity: number;
}

class CommentFactory {
  public generate({
    quantity = 1,
  }: ICommentInterfaceFactory): Omit<
    Comment,
    'id' | 'author_id' | 'post_id'
  >[] {
    const arrayComments = Array.from(
      { length: quantity },
      (): Omit<Comment, 'id' | 'author_id' | 'post_id'> => ({
        content: faker.lorem.text(),
        published: faker.random.boolean(),
      }),
    );
    return arrayComments;
  }
}
export default CommentFactory;
