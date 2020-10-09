// src/routes/index.ts
import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import imagesRouter from '@modules/images/infra/http/routes/images.routes';
import officeRouter from '@modules/offices/infra/http/routes/offices.routes';
import postsRouter from '@modules/posts/infra/http/routes/posts.routes';
import commentsRouter from '@modules/comments/infra/http/routes/comments.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/images', imagesRouter);
routes.use('/offices', officeRouter);
routes.use('/posts', postsRouter);
routes.use('/comments', commentsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
