import { container } from 'tsyringe';

import IImagesRepository from '@modules/images/repositories/IImagesRepository';
import ImagesRepository from '@modules/images/infra/typeorm/repositories/ImagesRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IImagesRepository>('ImagesRepository',ImagesRepository)
container.registerSingleton<IUsersRepository>('UsersRepository',UsersRepository)