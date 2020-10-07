// src/routes/index.ts
import { request, response, Router } from 'express';
import usersRouter from './users.routes';
import imagesRouter from './images.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/images', imagesRouter);

export default routes;
