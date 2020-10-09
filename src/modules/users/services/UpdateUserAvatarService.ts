import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import Image from '@modules/images/infra/typeorm/entities/Image';
import User from '@modules/users/infra/typeorm/entities/User';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUserRepository';
import IImagesRepository from '@modules/images/repositories/IImagesRepository';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}
class UpdateUserAvatarService {
  constructor(private usersRepository: IUsersRepository,private imagesRepository: IImagesRepository){}
  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    // const imagesRepository = getRepository(Image);
    // const usersRepository = getRepository(User);
    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('Only authenticated user can change avatar', 401);
    }

    if (user.image_id) {
      // Dell before photo
      const photoExist = await this.imagesRepository.findByImage(user.image_id);
      if (!photoExist) {
        throw new AppError('Photo not exist');
      }
      const userPhotoFilePath = path.join(
        uploadConfig.directory,
        photoExist.link,
      );
      const userPhotoFileExist = await fs.promises.stat(userPhotoFilePath);
      if (userPhotoFileExist) {
        await fs.promises.unlink(userPhotoFilePath);
      }
    }
    const { id } = await this.imagesRepository.create({ link: avatarFilename });
    user.image_id = id;
    await this.usersRepository.create(user);
    return user;
  }
}

export default UpdateUserAvatarService;
