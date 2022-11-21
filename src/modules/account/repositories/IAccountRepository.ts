import Account from '../infra/typeorm/entities/Account';

export default interface IAccountRepository {
  create(): Promise<Account>;
  getUserBalance(accountId: string): Promise<Partial<Account> | null>;
}
