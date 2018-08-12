import { Component, OnInit } from '@angular/core';


// Importing the service for USER API
import { DataService } from '../data.service';

// this will hold the data return from the API
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  // It is Property to hold the return data from API 

  users$: Object;

  // private instance of DataService
  constructor(private data: DataService) { }

  // code iside this execute when this component loads
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

}
