import { injectable, inject } from 'tsyringe';
import IAccountRepository from '../../../account/repositories/IAccountRepository';
import User from '../../infra/typeorm/entities/Transaction';
import IUsersRepository from '../../repositories/ITransactionRepository';
import { hash, genSalt } from 'bcrypt';
import ITransactionRepository from '../../repositories/ITransactionRepository';
import Transaction from '../../infra/typeorm/entities/Transaction';

interface IRequest {
  debitedAccountId: string;
  creditedAccountId: string;
  value: number
}

@injectable()
class CreateTransactionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('AccountRepository')
    private accountRepository: IAccountRepository,

    @inject('TransactionRepository')
    private transactionRepository: ITransactionRepository,
  ) {}

  public async execute({
    debitedAccountId,
    creditedAccountId,
    value,
  }: IRequest): Promise<Transaction | null> {

   const transaction = await this.transactionRepository.create({
    debitedAccountId,
    creditedAccountId,
    value,
   })
  
   

    return transaction;
  }
}

export default CreateTransactionUseCase;
