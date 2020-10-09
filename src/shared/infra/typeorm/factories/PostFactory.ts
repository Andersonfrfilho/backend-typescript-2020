import faker from 'faker';
import Post from '@modules/posts/infra/typeorm/entities/Post';

interface IPostInterfaceFactory {
  quantity: number;
}

class PostFactory {
  public generate({ quantity = 1 }: IPostInterfaceFactory): Omit<Post, 'id'>[] {
    const arrayPosts = Array.from(
      { length: quantity },
      (): Omit<Post, 'id'> => ({
        content: faker.lorem.words(),
        published: faker.random.boolean(),
      }),
    );
    return arrayPosts;
  }
}
export default PostFactory;
