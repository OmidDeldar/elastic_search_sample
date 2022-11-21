import { Injectable } from "@nestjs/common";
import { ElasticsearchService } from "@nestjs/elasticsearch";
import { PostSearchBodyInterface } from "../types/post-search-body.interface";
import { PostSearchResultInterface } from "../types/post-search-result.iterface";


@Injectable()
export class PostSearchService {
    index = 'post'

    constructor(private readonly elasticSearchService: ElasticsearchService){}

    async indexPost(post){
        return this.elasticSearchService.index<PostSearchBodyInterface>({
            index: this.index,
            body: {
                id:post.id,
                title:post.title,
                content: post.content,
            }
        })
        // return await this.elasticSearchService.index({
        //     index:'post',
        //     body:post,
        // })
    }

     async search(text: string){
        const  body = await this.elasticSearchService.search<any>({
            index: 'post',
            body: {
                query: {
                    multi_match: {
                        query: text,
                        fields: ['title', 'content']
                    }
                }
            }
        })
        
        const hits = body.hits.hits;
        
        return hits.map((item: any) => item._source);

    //     const findMatch=await this.elasticSearchService.search({index:"post",query:{
    //         bool:{
    //             must:[
    //                 {
    //                     match:{
    //                         text
    //                     },

    //                 },
    //             ]
    //         }
    //     }})
        
    // return findMatch.hits.hits
    }
}