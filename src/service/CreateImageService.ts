import { getCustomRepository } from 'typeorm';
import Image from '../models/Image';
import ImagesRepository from '../repositories/ImagesRepository';

interface Request {
  link: string;
}

class CreateImageService {
  public async execute({ link }: Request): Promise<Image> {
    const imagesRepository = getCustomRepository(ImagesRepository);

    const imageCreated = imagesRepository.create({
      link,
    });
    const image = await imagesRepository.save(imageCreated);
    return image;
  }
}
export default CreateImageService;
