// import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import Image from '@modules/images/infra/typeorm/entities/Image';

interface IImageInterfaceFactory {
  quantity: number;
}
class ImageFactory {
  public generate({ quantity = 1 }: IImageInterfaceFactory): Array<Image> {
    const arrayImages = Array.from(
      { length: quantity },
      (): Image => ({
        link: faker.image.imageUrl(),
      }),
    );
    return arrayImages;
  }
}
export default ImageFactory;
