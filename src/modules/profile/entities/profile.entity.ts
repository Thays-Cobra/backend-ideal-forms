import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'profile' })
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @ManyToOne(() => UserEntity, (user) => user.profiles, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  public user: Relation<UserEntity>;

  public constructor(data: Partial<ProfileEntity>) {
    this.id = data?.id;
    this.name = data?.name;
    this.user = data?.user;
  }
}
