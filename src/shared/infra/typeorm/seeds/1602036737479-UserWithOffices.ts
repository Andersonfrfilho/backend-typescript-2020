import { getConnection, MigrationInterface } from 'typeorm';

export default class UserWithOffices1602036737479
  implements MigrationInterface {
  public async up(): Promise<void> {
    const users: any = await getConnection('seed')
      .getRepository('users')
      .find();
    const offices: any = await getConnection('seed')
      .getRepository('offices')
      .find();
    const relationshipUsersOffices = Array.from({ length: 5 }, () => {
      return Array.from(
        { length: Math.floor(Math.random() * offices.length) },
        () => offices[Math.floor(Math.random() * offices.length)],
      );
    });
    const promiseForSaveRelationship = relationshipUsersOffices.map(
      async element => {
        users[Math.floor(Math.random() * users.length)].offices = element;
        return getConnection('seed').getRepository('users').save(users);
      },
    );
    await Promise.all(promiseForSaveRelationship);
  }

  public async down(): Promise<void> {
    await getConnection('seed').getRepository('user_office').delete({});
  }
}
