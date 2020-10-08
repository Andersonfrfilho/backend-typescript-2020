import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import Image from '../models/Image';
import User from '../models/User';
import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  avatarFilename: string;
}
class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const imagesRepository = getRepository(Image);
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(user_id);
    if (!user) {
      throw new AppError('Only authenticated user can change avatar', 401);
    }

    if (user.image_id) {
      // Dell before photo
      const photoExist = await imagesRepository.findOne(user.image_id);
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
    const { id } = await imagesRepository.save({ link: avatarFilename });
    user.image_id = id;
    await usersRepository.save(user);
    return user;
  }
}

export default UpdateUserAvatarService;
