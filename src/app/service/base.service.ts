import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  schedule = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }
  getData():Observable<any> {
    return this.http.get(`assets/events.json`);
  }
  getUsers():Observable<any>{
    return this.http.get(`assets/users.json`);
  }
}
