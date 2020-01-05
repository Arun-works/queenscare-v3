import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  selectedUsers: Contact;
  Users: Contact[];

  readonly baseURL = 'http://128.168.224.162:5000/store';
  // readonly baseURL = 'http://192.168.43.224:4000/auth/register';

  postUsers(user: Contact) {

    let headers: any = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseURL, user, {headers: headers})
  } 

  ngOninit(){}
}
