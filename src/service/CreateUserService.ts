import { getCustomRepository } from 'typeorm';
import User, { ETypeUser } from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  email: string;
  password: string;
  type: ETypeUser;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    type,
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userEmailExist = await usersRepository.findByEmail(email);

    if (userEmailExist) {
      throw new Error('This user is already exist');
    }
    const userCreated = usersRepository.create({
      name,
      email,
      password_hash: password,
      type,
    });
    console.log(userCreated);
    console.log(userEmailExist);
    console.log(name, email, password, type);
    const user = await usersRepository.save(userCreated);
    return user;
  }
}
export default CreateUserService;
