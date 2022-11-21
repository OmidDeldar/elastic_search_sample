import { PostSearchBodyInterface } from "./post-search-body.interface"

 

export interface PostSearchResultInterface {
    [x: string]: any
    hits: {
        total: number,
        hits: Array<{
            _source:PostSearchBodyInterface
        }>
    }
}