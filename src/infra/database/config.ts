//reflect-metadata = usado para que os decorators do TypeOrm funcionem
import 'reflect-metadata';
//DataSource = classe do TypeOrm que representa a conexão com BD
import { DataSourceOptions } from 'typeorm';

export const dataBaseSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  //porta padrão do mysql
  port: 3306,
  //credenciais
  username: 'test',
  password: 'test',
  //nome do BD
  database: 'test',
  entities: ['dist/src/modules/**/domain/entities/*.entity.js'],
  logging: true,
  extra: {
    waitForConnections: true,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  },
};
