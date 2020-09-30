import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

const userSeed = [
  {
    id: uuidv4(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    password_hash: faker.internet.password(),
    type: faker.name.jobType(),
    created_at: new Date(),
    updated_at: new Date(),
  },
];
export { userSeed as default };
