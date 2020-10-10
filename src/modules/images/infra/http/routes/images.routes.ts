import { Router } from 'express';
import { container } from 'tsyringe';
import CreateImageService from '@modules/images/services/CreateImageService';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import ImagesController from '@modules/images/infra/http/controllers/ImagesController';

const imagesRouter = Router();
const imagesController = new ImagesController();
imagesRouter.use(ensureAuthenticated);

imagesRouter.post('/', imagesController.create);

export default imagesRouter;
