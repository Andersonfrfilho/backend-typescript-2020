import faker from 'faker';
import Office from '../../models/Office';

interface IProfileInterfaceFactory {
  quantity: number;
}

class OfficeFactory {
  public generate({
    quantity = 1,
  }: IProfileInterfaceFactory): Omit<Office, 'id'>[] {
    const arrayOffices = Array.from(
      { length: quantity },
      (): Omit<Office, 'id'> => ({
        name: faker.name.jobType(),
      }),
    );
    return arrayOffices;
  }
}
export default OfficeFactory;
