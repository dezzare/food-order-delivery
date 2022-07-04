import { User } from '../models';
import { dataSource } from '../index'
import { FindOneOptions } from 'typeorm';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export const getUsers = async (): Promise<Array<User>> => {
  const userRepository = dataSource.getRepository(User);
  return userRepository.find();
}

export const createUser = async (payload: IUser): Promise<User> => {
  const userRepository = dataSource.getRepository(User);
  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

export const getUser = async (id: string): Promise<User | null> => {
  const searchId = {
    where: { id, }
  } as FindOneOptions<User>
  const userRepository = dataSource.getRepository(User);
  const user = await userRepository.findOne(searchId)
  if (!user) return null;
  return user;
};
