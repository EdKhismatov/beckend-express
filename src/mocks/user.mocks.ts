import { faker } from '@faker-js/faker';

export type UserMock = {
  id: number;
  email: string;
  name: string;
  password?: string;
};

export const userLoginMock = (): UserMock => {
  return {
    id: faker.number.int({ min: 1, max: 1000 }),
    email: faker.internet.email(),
    name: faker.person.fullName(),
  };
};

export const userRegMock = (): UserMock => {
  return {
    id: faker.number.int({ min: 1, max: 1000 }),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.string.alpha(10),
  };
};
