import { genSalt, hash } from 'bcrypt';
import { injectable, inject } from 'tsyringe';
import IAccountRepository from '../../../account/repositories/IAccountRepository';
import User from '../../infra/typeorm/entities/User';
import IUsersRepository from '../../repositories/IUsersRepository';

interface IRequest {
  username: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('AccountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  public async execute({
    username,
    password,
  }: IRequest): Promise<User | null> {

    const saltRounds = 6;
    const account =  await this.accountRepository.create();

    const salt = await genSalt(saltRounds);
    const hashedPassword = await hash(password, salt);

    if (account) {
      const user = await this.usersRepository.create({
        username,
        password: hashedPassword,
        accountId: account.id,
      });
  
      return user;
    }

    return null;
  }
}


export default CreateUserUseCase;
