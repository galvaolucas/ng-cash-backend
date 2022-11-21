import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Account from '../../../../account/infra/typeorm/entities/Account';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  debitedAccountId: string;
  @ManyToOne(() => Account, account => account.id)

  @Column()
  creditedAccountId: string;
  @ManyToOne(() => Account, account => account.id)

  @Column()
  balance: number;

  @CreateDateColumn()
  created_at: Date;

}

export default Transaction;
