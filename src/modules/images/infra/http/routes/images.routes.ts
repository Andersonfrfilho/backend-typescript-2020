import { Router } from 'express';
import ImagesRepository from '@modules/images/infra/typeorm/repositories/ImagesRepository';
import CreateImageService from '@modules/images/services/CreateImageService';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const imagesRouter = Router();

imagesRouter.use(ensureAuthenticated);

// imagesRouter.get('/', async (request, response) => {
  //   const images = await imagesRepository.find();
  
  //   return response.json(images);
  // });
  
imagesRouter.post('/', async (request, response) => {
  const imagesRepository = new ImagesRepository();
  const { link } = request.body;
  const imageCreate = new CreateImageService(imagesRepository);
  const image = await imageCreate.execute({ link });
  return response.json(image);
});

export default imagesRouter;
