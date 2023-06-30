import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe(posts => {
     console.log({posts})
    }) 
  }

}
