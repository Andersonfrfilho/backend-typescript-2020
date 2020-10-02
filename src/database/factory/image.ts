import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import Image from '../../models/Image';

interface IUserInterfaceFactory {
  number: number;
}
export default function usersFactory({
  number = 1,
}: IUserInterfaceFactory): Array<Image> {
  const arrayImages = Array.from({ length: number }, () => ({
    id: uuidv4(),
    link: faker.image.imageUrl(),
    created_at: new Date(),
    updated_at: new Date(),
  }));

  return arrayImages;
}
