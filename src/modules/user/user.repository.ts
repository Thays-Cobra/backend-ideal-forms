import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectDataSource()
    private readonly repository: DataSource,
  ) {}

  public async findAll(): Promise<UserEntity[]> {
    return await this.repository.manager
      .createQueryBuilder(UserEntity, 'user')
      .select(['user.name'])
      .getMany();
  }
}
