import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import uploadConfig from '@config/upload';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import UsersController from '@modules/users/infra/http/controller/UsersController';
import UserImageController from '@modules/users/infra/http/controller/UserImageController';
const usersRouter = Router();
const upload = multer(uploadConfig);
const usersRepository = new UsersController()
const usersImageRepository = new UserImageController()

usersRouter.post('/', usersRepository.create);
usersRouter.use(ensureAuthenticated);
// usersRouter.get('/', ensureAuthenticated,async (request, response) => { //especify middleware
usersRouter.get('/', async (request, response) => {
  try {
    // const usersRepository = getCustomRepository(UsersRepository);
    // const users = await usersRepository.({
    //   relations: ['photo', 'posts', 'comments', 'offices'],
    // });

    return response.json({api:true});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/photo',
  upload.single('photo'),
  usersImageRepository.update
);

export default usersRouter;
