import { v4 as uuidv4 } from 'uuid';

enum ETypeUser {
  client = 'CLIENT',
  admin = 'ADMIN',
}

class User {
  id: string;

  name: string;

  email: string;

  password: string;

  type: ETypeUser;

  constructor({ name, email, password, type }: Omit<User, 'id'>) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
  }
}
export { User as default, ETypeUser };
