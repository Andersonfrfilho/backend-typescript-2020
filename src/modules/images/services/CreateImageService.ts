import Image from '@modules/images/infra/typeorm/entities/Image';
import IImagesRepository from '@modules/images/repositories/IImagesRepository';
import { injectable,inject } from 'tsyringe';
interface IRequest {
  link: string;
}
@injectable()
class CreateImageService {
 
  constructor(
    @inject('ImagesRepository')
    private imagesRepository: IImagesRepository
    ) {}

  public async execute({ link }: IRequest): Promise<Image> {

    const image = await this.imagesRepository.create({
      link,
    });

    return image;
  }
}
export default CreateImageService;
