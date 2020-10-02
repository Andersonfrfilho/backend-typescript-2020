import { EntityRepository, Repository } from 'typeorm';
import Image from '../models/Image';

@EntityRepository(Image)
class ImagesRepository extends Repository<Image> {
  // public async findByEmail(email: string): Promise<Image | null> {
  //   const findUser = await this.findOne({
  //     where: { email },
  //   });
  //   return findUser || null;
  // }
}
export default ImagesRepository;
