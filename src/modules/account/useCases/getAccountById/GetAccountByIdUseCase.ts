import { injectable, inject } from 'tsyringe';
import Account from '../../infra/typeorm/entities/Account';
import IAccountRepository from '../../repositories/IAccountRepository';

interface IRequest {
  id: string;
}

@injectable()
class GetAccountByIdUseCase {
  constructor(
    @inject('AccountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Partial<Account>> {
  
    const account = await this.accountRepository.getUserBalance(id);

    return account;
  }
}

export default GetAccountByIdUseCase;
