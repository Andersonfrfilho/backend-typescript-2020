import User, { ETypeUser } from '../models/User';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  type: ETypeUser;
}
class UsersRepository {
  private users: Array<User>;

  constructor() {
    this.users = [];
  }

  public all(): Array<User> {
    return this.users;
  }

  public findByEmail(email: string): User | null {
    return (
      this.users.find(
        user => email.toLowerCase() === user.email.toLowerCase(),
      ) || null
    );
  }

  public create({ name, email, password, type }: CreateUserDTO): User {
    const user = new User({ name, email, password, type });
    this.users.push(user);
    return user;
  }
}
export default UsersRepository;
