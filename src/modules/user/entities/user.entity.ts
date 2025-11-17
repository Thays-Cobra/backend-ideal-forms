import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  public email: string;
  public password: string;
  //public profiles: Profile[]

  public constructor(data: Partial<UserEntity>) {
    this.id = data?.id;
    this.name = data?.name;
    this.email = data?.email;
    this.password = data?.password;
    //profiles ??
  }
}
