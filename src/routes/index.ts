// src/routes/index.ts
import { request, response, Router } from 'express';
import usersRouter from './users.routes';
import imagesRouter from './images.routes';
import officeRouter from './offices.routes';
import postsRouter from './posts.routes';
import commentsRouter from './comments.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/images', imagesRouter);
routes.use('/offices', officeRouter);
routes.use('/posts', postsRouter);
routes.use('/comments', commentsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
