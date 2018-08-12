import { Component, OnInit } from '@angular/core';


// Importing the service for USER API
import { DataService } from '../data.service';

// this will hold the data return from the API
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // It is Property to hold the return data from API 

  user$: Object;

  // private instance of DataService
  constructor(private data: DataService, private route: ActivatedRoute) { 
    // need to get the id from the parameter
    this.route.params.subscribe(
      params => this.user$ = params.id
    )

  }


  // when some click fro deatil then
  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    )
  }

}
