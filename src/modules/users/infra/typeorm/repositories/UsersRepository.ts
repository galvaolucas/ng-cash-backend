import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../data-source';
import ICreateUsersDTO from '../../../dtos/ICreateUsersDTO';
import IUsersRepository from '../../../repositories/IUsersRepository';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  public async create(userData: ICreateUsersDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async getUserByUsername(username: string): Promise<User> {
    const user = await this.ormRepository.findOne({
      where: { username }
    })

    if (!user) {
      throw new Error('The user was not found!')
    }

    return user
  }
}

export default UsersRepository;
