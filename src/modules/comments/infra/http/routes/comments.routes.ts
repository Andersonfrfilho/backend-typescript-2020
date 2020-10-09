import { Router } from 'express';

const commentsRouter = Router();

commentsRouter.get('/', async (request, response) => {
  return response.json({ route: true });
});

export default commentsRouter;
