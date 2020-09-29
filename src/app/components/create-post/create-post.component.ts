import { PostHandlerService } from './../../services/post-handler.service';
import { formatOfPost } from './../../formatof.post';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  constructor(public v_postService: PostHandlerService) { }


  enteredTitle = '';
  enteredContent = '';

  savePost(data:NgForm){
    if(data.invalid)
      return;
    this.v_postService.sendData(data.value.enteredTitle, data.value.enteredContent)
    data.reset();
  }

}
