import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
imports:[
    ConfigModule,
    ElasticsearchModule.registerAsync({
        imports:[ConfigModule],
        useFactory: async (configService: ConfigService) => ({
            node: 'http://localhost:9200',
            auth: {
                username: 'elastic',
                password: 'vyfcz*rsgH92EV2mE74X'
            },
        }),
        inject:[ConfigService]
    })
],
exports:[ElasticsearchModule]
})
export class SearchModule {}
