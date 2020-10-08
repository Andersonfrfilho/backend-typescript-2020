import { Router } from 'express';

const officesRouter = Router();

officesRouter.get('/', async (request, response) => {
  return response.json({ route: true });
});

export default officesRouter;
