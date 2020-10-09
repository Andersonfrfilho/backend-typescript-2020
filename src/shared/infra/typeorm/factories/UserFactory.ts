import faker from 'faker';
import User from '@modules/users/infra/typeorm/entities/User';

interface IUserInterfaceFactory {
  quantity: number;
}

class UserFactory {
  public generate({ quantity = 1 }: IUserInterfaceFactory): Omit<User, 'id'>[] {
    const arrayUsers = Array.from(
      { length: quantity },
      (): Omit<User, 'id'> => ({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password_hash: faker.internet.password(),
        type: faker.name.jobType(),
      }),
    );
    return arrayUsers;
  }
}
export default UserFactory;
