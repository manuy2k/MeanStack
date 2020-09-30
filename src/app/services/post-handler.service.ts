import { HttpClient } from '@angular/common/http';
import { formatOfPost } from './../formatof.post';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostHandlerService {

  constructor(private http: HttpClient ) {

  }
  private postData : formatOfPost[] = [];
  private v_subject = new Subject<formatOfPost[]>();

  getData() {
    //return [...this.postData];
    this.http.get("http://localhost:3000/api/posts")
  }

  getPostsObs(){
    return this.v_subject.asObservable();
  }

  sendData(tit: string, cont: string){
    const putData : formatOfPost = {title:tit, content: cont};
    this.postData.push(putData);
    this.v_subject.next([...this.postData]);
  }
}
