import User, { ETypeUser } from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  email: string;
  password: string;
  type: ETypeUser;
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute({ name, email, password, type }: Request): User {
    const userEmailExist = this.usersRepository.findByEmail(email);
    if (userEmailExist) {
      throw Error('This appointment is already booked');
    }
    const user = this.usersRepository.create({ name, email, password, type });
    return user;
  }
}
export default CreateUserService;
