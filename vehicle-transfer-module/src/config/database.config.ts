import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'sql12.freesqldatabase.com',
  port: 3306,
  username: 'sql12728040',
  password: '6teES33BYT',
  database: 'sql12728040',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
