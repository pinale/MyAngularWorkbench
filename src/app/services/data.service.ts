import { getTestBed } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";

import { Injectable } from '@angular/core';

import { User } from './../shared/viewmodels';

import { Observable, pipe } from "rxjs";
import { delay, map} from 'rxjs/operators'




@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://jsonplaceholder.typicode.com";

  //debug purpose
  users: User[] = [
                    { id : 1 ,name:'alessio',email:'alessio@gmail.com',phone:'1-770-736-8031 x56442'},
                    { id : 2 ,name:'samuel',email:'alessio@gmail.com',phone:'1-770-736-8031 x56442'},
                    { id : 3 ,name:'emily',email:'alessio@gmail.com',phone:'1-770-736-8031 x56442'},
                    { id : 4 ,name:'ida',email:'alessio@gmail.com',phone:'1-770-736-8031 x56442'}
  ];  

  constructor(public http: HttpClient) { 
    
  }
  
  public getData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`)
          .pipe(
            map(x => x.slice(0, 4))
          );
  }
 
}
