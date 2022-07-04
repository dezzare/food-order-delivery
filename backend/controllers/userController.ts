import { User } from '../models';
import {
  getUsers,
  createUser,
  IUser,
  getUser
} from '../repositories/UserRepository'

export default class UserController {
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  public async createUser(body: IUser): Promise<User> {
    return createUser(body);
  }

  public async getUser(id: string): Promise<User | null> {
    return getUser(String(id));
  }
}

