import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from 'src/search/search.module';
import { PostController } from './controller/post.controller';
import { Post } from './entity/post.entity';
import { PostSearchService } from './service/post-search.service';
import { PostService } from './service/post.service';

@Module({
imports:[TypeOrmModule.forFeature([Post]),SearchModule],
providers: [PostSearchService,PostService],
controllers: [PostController],
})
export class PostModule {}
