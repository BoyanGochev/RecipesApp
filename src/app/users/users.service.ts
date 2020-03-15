import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';

const baseUrl = environment.baseUrl;
const appKey = environment.appKey;
const appSecret = environment.appSecret;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  get httpBasicOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'

      })
    };
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  register(input) {
    const data = {
      username: input.username,
      password: input.passwords.password,
      firstName: input.firstName,
      lastName: input.lastName
    };

    return this.http.post(`${baseUrl}/user/${appKey}`, JSON.stringify(data), this.httpBasicOptions);
  }

  setUserAuth(userInfo){
    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
    sessionStorage.setItem('names', `${userInfo.firstName} ${userInfo.lastName}`);
    sessionStorage.setItem('userId', userInfo._id);
  }
}
