import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('profile')
export class ProfileEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  avatar: string;

  @Column()
  phone: string;
}
