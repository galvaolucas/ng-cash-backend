import ICreateUsersDTO from '../dtos/ICreateUsersDTO';
import User from '../infra/typeorm/entities/User';

export default interface ICarsRepository {
  create(data: ICreateUsersDTO): Promise<User>;
}
