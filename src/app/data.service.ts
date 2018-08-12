import { Injectable } from '@angular/core';
// This file is used to connect with API
// following is providing the API to this app:
// https://jsonplaceholder.typicode.com/

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

// Inside this class we creating instance of above HttpClient
// through 'dependency injection'
// http : is name of instance
export class DataService {

  constructor(private http: HttpClient) { }
    // custom method which caal upon in component

    // this returing the JSON formatted API
    getUsers(){
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    }
  
}
