import { injectable, inject } from 'tsyringe';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import IUsersRepository from '../../../users/repositories/IUsersRepository';
import auth from '../../../../shared/config/auth';
import Auth from '../../typeorm/entities/Auth';

interface IRequest {
  username: string;
  password: string;
}

@injectable()
class CreateTransactionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    username,
    password,
  }: IRequest): Promise<Auth | null> {

    const {
      secret_token,
      expires_in_token,
    } = auth.jwt;

    const user = await this.usersRepository.getUserByUsername(username);
  
    if (!user) {
      throw new Error('The user was not found!')
    }

    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      throw new Error("The passwords aren't matching!")
    }

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token,
    });

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
        accountId: user.accountId,
      },
    };

  }
}

export default CreateTransactionUseCase;
