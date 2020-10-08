import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ImagesRepository from '../repositories/ImagesRepository';
import CreateImageService from '../service/CreateImageService';

const imagesRouter = Router();

imagesRouter.get('/', async (request, response) => {
  const imagesRepository = getCustomRepository(ImagesRepository);
  const images = await imagesRepository.find();

  return response.json(images);
});

imagesRouter.post('/', async (request, response) => {
  const { link } = request.body;
  const imageCreate = new CreateImageService();
  const image = await imageCreate.execute({ link });
  return response.json(image);
});

export default imagesRouter;
