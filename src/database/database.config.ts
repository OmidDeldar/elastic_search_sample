import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Post } from "src/posts/entity/post.entity";

export class PostgresTypeormConfiguration implements TypeOrmOptionsFactory
{
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        const TypeOrmOptions:TypeOrmModuleOptions=
        {
            type:'postgres',
            username:'postgres',
            password:'123456',
            host:'localhost',
            port:5432,
            autoLoadEntities:true,
            database:'test-elasticsearch',
            synchronize:true
        }
        return TypeOrmOptions
    }
}