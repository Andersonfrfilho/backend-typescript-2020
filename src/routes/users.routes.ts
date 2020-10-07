import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../service/CreateUserService';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);
  const users = await usersRepository.find({
    relations: ['photo', 'posts', 'comments', 'offices'],
  });

  return response.json(users);
});

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

export default usersRouter;
