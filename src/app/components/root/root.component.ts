import { formatOfPost } from './../../formatof.post';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'root-comp',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {

  constructor() { }
  incomingPosts: formatOfPost[] = [];

  incomingValue(post){
    this.incomingPosts.push(post);
  }


}
