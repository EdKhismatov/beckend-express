import { faker } from '@faker-js/faker';

export const taskMock = (count = 1) => {
  const task: Record<string, string | number>[] = [];
  for (let i = 0; i < count; i++) {
    task.push({
      id: faker.number.int({ min: 1, max: 1000 }),
      task: faker.lorem.paragraph(),
    });
  }
  return task;
};

console.log(taskMock());
