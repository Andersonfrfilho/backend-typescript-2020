import Image from '@modules/images/infra/typeorm/entities/Image';
import ICreateImageDTO from '@modules/images/dtos/ICreateImageDTO';

export default interface IImagesRepository {
  create(data: ICreateImageDTO): Promise<Image>;
  findByImage(email: string): Promise<Image | undefined>;
}
