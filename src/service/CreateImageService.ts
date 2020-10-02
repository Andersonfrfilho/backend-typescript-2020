import { getCustomRepository } from 'typeorm';
import User, { ETypeUser } from '../models/User';
import Image from '../models/Image';
import UsersRepository from '../repositories/UsersRepository';
import ImagesRepository from '../repositories/ImagesRepository';

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
  }: Request): Promise<User | null> {
    const usersRepository = getCustomRepository(UsersRepository);
    const imagesRepository = getCustomRepository(ImagesRepository);
    // const userEmailExist = await usersRepository.findByEmail(email);
    const imageCreated = imagesRepository.create({
      link: 'ijuhasd;',
    });
    console.log('uhul');
    await imagesRepository.save(imageCreated);
    // if (userEmailExist) {
    //   throw new Error('This user is already exist');
    // }
    // const userCreated = usersRepository.create({
    //   name,
    //   email,
    //   password_hash: password,
    //   type,
    // });
    // const user = await usersRepository.save(userCreated);
    return user || null;
  }
}
export default CreateUserService;
