// src/routes/index.ts
import { request, response, Router } from 'express';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);

export default routes;
