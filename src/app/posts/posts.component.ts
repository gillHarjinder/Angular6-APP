import { Component, OnInit } from '@angular/core';


// Importing the service for USER API
import { DataService } from '../data.service';

// this will hold the data return from the API
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // It is Property to hold the return data from API 

  posts$: Object;

  // private instance of DataService
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )
  }

}
