import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import User from '../../models/User';

interface IUserInterfaceFactory {
  number: number;
}
export default function usersFactory({
  number = 1,
}: IUserInterfaceFactory): Array<Omit<
  User,
  'image_id' | 'comments' | 'photo' | 'offices' | 'posts'
> | null> {
  const users: Array<Omit<
    User,
    'image_id' | 'comments' | 'photo' | 'offices' | 'posts'
  > | null> = new Array(number);
  users.fill(null);
  const arrayUsers = users.map(user => ({
    id: uuidv4(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    password_hash: faker.internet.password(),
    type: faker.name.jobType(),
    created_at: new Date(),
    updated_at: new Date(),
  }));

  return arrayUsers;
}
