import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import multer from 'multer';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ImagesRepository from '@modules/images/infra/typeorm/repositories/ImagesRepository';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import uploadConfig from '@config/upload';

import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);


usersRouter.post('/', async (request, response) => {
  try {
    const usersRepository = new UsersRepository();
    const { name, email, password, type } = request.body;
    const createUser = new CreateUserService(usersRepository);
    const user = await createUser.execute({ name, email, password, type });
    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
usersRouter.use(ensureAuthenticated);
// usersRouter.get('/', ensureAuthenticated,async (request, response) => { //especify middleware
usersRouter.get('/', async (request, response) => {
  try {
    const usersRepository = new UsersRepository();
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find({
      relations: ['photo', 'posts', 'comments', 'offices'],
    });

    return response.json(users);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/photo',
  upload.single('photo'),
  async (request, response) => {
    const usersRepository = new UsersRepository();
    const imagesRepository = new ImagesRepository();
    const updateUserAvatar = new UpdateUserAvatarService(usersRepository,imagesRepository);
    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });
    return response.json(user);
  },
);

export default usersRouter;
