import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profile' })
export class ProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  public constructor(data: Partial<ProfileEntity>) {
    this.id = data?.id;
    this.name = data?.name;
  }
}
