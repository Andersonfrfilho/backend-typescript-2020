import { getConnection, MigrationInterface } from 'typeorm';
import factories from '../factories';

export default class UsersSeeds1601957843023 implements MigrationInterface {
  public async up(): Promise<void> {
    const userFactory = new factories.User();
    const users = userFactory.generate({ quantity: 5 });
    await getConnection('seed').getRepository('users').save(users);
  }

  public async down(): Promise<void> {
    await getConnection('seed').getRepository('users').delete({});
  }
}
