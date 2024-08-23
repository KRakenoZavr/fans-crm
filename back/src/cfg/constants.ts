import { SequelizeOptions } from 'sequelize-typescript';

export const cfg = {
  jwtSecret: 'secret key',
  db: {
    provider: 'SEQUELIZE',
    connection: {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'fans-crm',
      omitNull: true,
    } as SequelizeOptions,
  },
};
