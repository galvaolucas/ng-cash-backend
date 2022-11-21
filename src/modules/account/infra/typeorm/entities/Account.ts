import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Transaction from '../../../../transactions/infra/typeorm/entities/Transaction';
import User from '../../../../users/infra/typeorm/entities/User';

@Entity('accounts')
class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => User, user => user.accountId)
  @OneToMany(() => Transaction, transaction => transaction.debitedAccountId)
  @OneToMany(() => Transaction, transaction => transaction.creditedAccountId)

  @Column()
  balance: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Account;
