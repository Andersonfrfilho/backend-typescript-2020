import { request, response, Router } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserSevice from '../service/CreateUserService';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/', (request, response) => {
  const users = usersRepository.all();

  return response.json({api:false});
});

usersRouter.post('/', (request, response) => {
  try {
    const { name, email, password, type } = request.body;
    const createUser = new CreateUserSevice(usersRepository);
    const user = createUser.execute({ name, email, password, type });
    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: 'error ss' });
  }
});

export default usersRouter;
