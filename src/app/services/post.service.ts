import { inject, Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Post } from '../models/post.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _baseUri = 'http://localhost:5000/';
  private _baseService = inject(GenericService);

  constructor() { }

   addPost(post: Post)
   {
    
     return this._baseService.post(this._baseUri, post)
   }

   getAllPosts()
   {
      console.log("posts");
      
      return this._baseService.get<Post[]>(this._baseUri+'posts')
   }

   getPostById(postId:string){
    const PARAMS = new HttpParams().set('id',postId);
    return this._baseService.get(this._baseUri, PARAMS)
   }

   deletePost(postId: string)
   {
    const PARAMS = new HttpParams().set('id',postId)
      return this._baseService.delete(this._baseUri, PARAMS)
   }

   updatePost(post: Post)
   {
    return this._baseService.put(this._baseUri, post);
   }

}
