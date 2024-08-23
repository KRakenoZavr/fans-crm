import { Sequelize } from 'sequelize-typescript';
import { cfg } from 'src/cfg/constants';
import { User } from 'src/users/users.entity';

export const databaseProviders = [
  {
    provide: cfg.db.provider,
    useFactory: async () => {
      const sequelize = new Sequelize(cfg.db.connection);
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
