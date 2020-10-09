import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User, { ETypeUser } from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import UsersRepository from '@modules/users/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUserRepository'
interface IRequest {
  name: string;
  email: string;
  password: string;
  type: ETypeUser;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository){}
  public async execute({
    name,
    email,
    password,
    type,
  }: IRequest): Promise<User> {
    const userEmailExist = await this.usersRepository.findByEmail(email);

    if (userEmailExist) {
      throw new AppError('This user is already exist');
    }
    const hashedPassword = await hash(password, 8);
    const user = await this.usersRepository.create({
      name,
      email,
      password_hash: hashedPassword,
      type,
    });
    return user;
  }
}
export default CreateUserService;
