import { injectable, inject } from 'tsyringe';
import Account from '../../infra/typeorm/entities/Account';
import IAccountRepository from '../../repositories/IAccountRepository';

@injectable()
class CreateAccountUseCase {
  constructor(
    @inject('AccountRepository')
    private accountRepository: IAccountRepository,
  ) {}

  public async execute(): Promise<Account> {
  
    const account = await this.accountRepository.create();

    return account;
  }
}

export default CreateAccountUseCase;
