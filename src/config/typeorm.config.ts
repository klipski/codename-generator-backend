import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// console.log(__dirname + '/../modules/**/*.entity.{js,ts}')
// console.log(__dirname + '/../modules/**/*.entity.{js,ts}')

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: __dirname + '/../../names.sqlite3',
  entities: [__dirname + '/../modules/**/*.entity.{js,ts}'],
  synchronize: false,
};