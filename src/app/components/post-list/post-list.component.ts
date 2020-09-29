import { PostHandlerService } from './../../services/post-handler.service';
import { formatOfPost } from './../../formatof.post';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

  constructor(public postService: PostHandlerService) { }
  private sub : Subscription;
  postLists:formatOfPost[] = this.postService.getData();

  ngOnInit(){
    this.postService.getPostsObs()
      .subscribe((val) =>
        this.postLists = val);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }



}
