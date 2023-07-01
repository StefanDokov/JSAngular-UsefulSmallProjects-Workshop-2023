import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';


@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {
  postsList: Post[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe(
    {
      next: (posts) => {
     this.postsList = posts;
     this.isLoading = false;
    }, 
    error: (err) => {
      this.isLoading = false;
      console.error(`Error: ${err}`);
    
  },
  })
  }
}
