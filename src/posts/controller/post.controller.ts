import { Body, Controller, Get, Query, Post } from "@nestjs/common";
import { PostService } from "../service/post.service";
import { CreatePostDto } from "../dtos/create-post.dto";


@Controller('posts')

export class PostController{
    constructor(private readonly postService: PostService){}

    @Post('create')
    async createPost(@Body() createPostDto:CreatePostDto){
        return await this.postService.createPost(createPostDto);
    }
    @Get('search')
    async getPosts(@Query('search') search: string){
            return await this.postService.searchForPosts(search);
    }
}