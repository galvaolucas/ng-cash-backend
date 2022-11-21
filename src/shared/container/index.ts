import { container } from 'tsyringe';
import AccountRepository from '../../modules/account/infra/typeorm/repositories/AccountRepository';
import IAccountRepository from '../../modules/account/repositories/IAccountRepository';
import TransactionRepository from '../../modules/transactions/infra/typeorm/repositories/TransactionRepository';
import ITransactionRepository from '../../modules/transactions/repositories/ITransactionRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '../../modules/users/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IAccountRepository>(
  'AccountRepository',
  AccountRepository,
);

container.registerSingleton<ITransactionRepository>(
  'TransactionRepository',
  TransactionRepository,
);



