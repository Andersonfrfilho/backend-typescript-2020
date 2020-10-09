import Image from '@modules/images/infra/typeorm/entities/Image';
import IImagesRepository from '@modules/images/repositories/IImagesRepository';

interface IRequest {
  link: string;
}

class CreateImageService {
  constructor(private imagesRepository: IImagesRepository) {}

  public async execute({ link }: IRequest): Promise<Image> {

    const image = await this.imagesRepository.create({
      link,
    });

    return image;
  }
}
export default CreateImageService;
