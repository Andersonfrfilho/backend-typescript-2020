import { injectable, inject } from 'tsyringe'
import { hash } from 'bcryptjs';
import User, { ETypeUser } from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
interface IRequest {
  name: string;
  email: string;
  password: string;
  type: ETypeUser;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository){}
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
