import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CreatePostDto } from "../dtos/create-post.dto";
import { Post } from "../entity/post.entity";
import { PostSearchService } from "./post-search.service";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepo: Repository<Post>,
        private postSearchService: PostSearchService
    ){}

    async createPost(post:CreatePostDto){
        const newPost = this.postRepo.create({
            ...post
        });
        const savedPost = await this.postRepo.save(newPost);
        this.postSearchService.indexPost(savedPost);
        return savedPost;
    }

    async searchForPosts(text:string){
        // return await this.postSearchService.search(text);
        
        const result = await this.postSearchService.search(text);
        const ids = result.map(result => result.id);
        if(!ids.length){
            return [];
        }
         return this.postRepo.find({where:{id: In(ids)}});
    }
}