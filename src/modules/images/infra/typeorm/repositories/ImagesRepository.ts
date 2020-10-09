import { getRepository, Repository } from 'typeorm';
import Image from '@modules/images/infra/typeorm/entities/Image';
import IImagesRepository from '@modules/images/repositories/IImagesRepository';
import ICreateImageDTO from '@modules/images/dtos/ICreateImageDTO';

class ImagesRepository implements IImagesRepository {
  private ormRepository: Repository<Image>;

  constructor() {
    this.ormRepository = getRepository(Image);
  }

  public async findByImage(email: string): Promise<Image | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });
    return findUser;
  }

  public async create({ link }: ICreateImageDTO): Promise<Image> {
    const image = this.ormRepository.create({ link });
    await this.ormRepository.save(image);
    return image;
  }
}
export default ImagesRepository;
