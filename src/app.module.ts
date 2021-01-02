import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { NamesModule } from './modules/names/names.module';

@Module({
  imports: [
    NamesModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule { }
