import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const options: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nestuser',
  password: 'nestpass',
  database: 'formdb',
  entities: ['build/modules/**/entities/*.entity.js'],
  migrations: ['build/infra/database/migrations/*.js'],
  migrationsTableName: 'migrations',
  logging: true,
};

const dataSourceMigration = new DataSource(options);

export default dataSourceMigration;
