//Decorators (@) = tipo especial de declaração que pode ser anexada em vários lugares, como classes, métodos, props e params
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from 'typeorm';
import { ProfileEntity } from '../../profile/entities/profile.entity';

//@Entity = indica que a classe é uma entidade e representa a tabela user
@Entity({ name: 'user' })
export class UserEntity {
  //@PrimaryGeneratedColumn = define a coluna da chave primária gerada automaticamente
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  //@Column = define colunas normais
  @Column()
  public name: string;
  @Column()
  public email: string;
  @Column()
  public password: string;
  @OneToMany(() => ProfileEntity, (profile) => profile.user)
  public profiles: Relation<ProfileEntity[]>;

  public constructor(data?: Partial<UserEntity>) {
    this.id = data?.id;
    this.name = data?.name;
    this.email = data?.email;
    this.password = data?.password;
    this.profiles = data?.profiles;
  }
}
