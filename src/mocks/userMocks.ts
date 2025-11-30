import { faker } from '@faker-js/faker';

export type UserMock = {
  id: number;
  email: string;
  name: string;
};

export const userMock = (): UserMock => {
  return {
    id: faker.number.int({ min: 1, max: 1000 }),
    email: faker.internet.email(),
    name: faker.person.fullName(),
  };
};
