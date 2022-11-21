import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './posts/posts.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [SearchModule,DatabaseModule, PostModule],
})
export class AppModule {}
