import { Router } from 'express';

const postsRouter = Router();

postsRouter.get('/', async (request, response) => {
  return response.json({ route: true });
});

export default postsRouter;
