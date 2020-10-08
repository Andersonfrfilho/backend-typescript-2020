import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User, { ETypeUser } from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

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
      throw new AppError('This user is already exist');
    }
    const hashedPassword = await hash(password, 8);
    const userCreated = usersRepository.create({
      name,
      email,
      password_hash: hashedPassword,
      type,
    });
    const user = await usersRepository.save(userCreated);
    return user;
  }
}
export default CreateUserService;
