import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../data-source';
import ICreateTransactionDTO from '../../../dtos/ICreateTransactionDTO';
import IUsersRepository from '../../../repositories/ITransactionRepository';
import Transaction from '../entities/Transaction';
import User from '../entities/Transaction';

class TransactionRepository implements IUsersRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Transaction);
  }

  public async create(transactionData: ICreateTransactionDTO): Promise<Transaction> {

    const transaction = this.ormRepository.create(transactionData);

    await this.ormRepository.save(transaction);

    return transaction;
  }
  
}

export default TransactionRepository;
