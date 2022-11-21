import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../data-source';
import IAccountRepository from '../../../repositories/IAccountRepository';
import Account from '../entities/Account';

class AccountRepository implements IAccountRepository {
  private ormRepository: Repository<Account>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Account);
  }

  public async create(): Promise<Account> {
    const account = this.ormRepository.create();

    await this.ormRepository.save(account);

    return account;
  }

  public async getAccountById (id: string) : Promise<Account> {
    const account = await this.ormRepository.findOne({
      where: {
        id,
      }
    })

    if (!account) {
      throw new Error('The account wasnt found!');
    }

    return account;
  }

  public async getUserBalance(accountId: string): Promise<Partial<Account> | null> {
    const account = await this.ormRepository.findOne({
      where: {
        id: accountId,
      }
    });

    if (!account) return null;

    return { id: account.id, balance: account.balance};
  }

  public async addFoundsToAccount (creditedAccountId: string, value: number): Promise<Account> {
    const account = await this.getAccountById(creditedAccountId);

    const newAccount = this.ormRepository.merge(account, {
      balance: account.balance + value,
    })

    await this.ormRepository.save(newAccount, { reload: true });

    return newAccount;
  }
}

export default AccountRepository;
