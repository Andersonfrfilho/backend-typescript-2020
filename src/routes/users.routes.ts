import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import multer from 'multer';
import UsersRepository from '../repositories/UsersRepository';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

import CreateUserService from '../service/CreateUserService';
import UpdateUserAvatarService from '../service/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password, type } = request.body;
    const createUser = new CreateUserService();
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
    const updateUserAvatar = new UpdateUserAvatarService();
    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });
    return response.json(user);
  },
);

export default usersRouter;
