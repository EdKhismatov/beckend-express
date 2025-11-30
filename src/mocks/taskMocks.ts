import { faker } from '@faker-js/faker';

export const taskMock = (count = 1) => {
  const task: string[] = [];
  for (let i = 0; i < count; i++) {
    task.push(faker.lorem.paragraph());
  }
  return task;
};

// console.log(taskMock());
