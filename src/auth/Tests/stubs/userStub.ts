import { User } from '../../../types/@generated';

export const userStub = (): User => {
  return {
    phoneNumber: '+243975344824',
    password: '123456',
    updatedAt: new Date(2024, 8, 15),
    createdAt: new Date(2024, 8, 15),
    name: 'Alexandre',
    biography: 'sample biography',
    id: '1',
  };
};
