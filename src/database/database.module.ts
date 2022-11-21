import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresTypeormConfiguration } from './database.config';

@Module({
    imports:[TypeOrmModule.forRootAsync({useClass:PostgresTypeormConfiguration})]
})
export class DatabaseModule {}