import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import User from '../../../users/infra/typeorm/entities/User';

@Entity('auth')
class Account {
  @Column()
  token: string;

  @Column()
  @OneToOne(() => User)
  user: Partial<User>;
}

export default Account;
