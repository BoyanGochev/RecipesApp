import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { RecipesService } from '../recipes/recipes.service';

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
    private recipesService: RecipesService,
    private router: Router
  ) { }

  login(input) {
    const data = {
      username: input.username,
      password: input.password
    };
    return this.http.post(`${baseUrl}/user/${appKey}/login`, JSON.stringify(data), this.httpBasicOptions);
  }

  register(input) {
    const data = {
      username: input.username,
      password: input.passwords.password,
      firstName: input.firstName,
      lastName: input.lastName
    };
    return this.http.post(`${baseUrl}/user/${appKey}`, JSON.stringify(data), this.httpBasicOptions);
  }

  logout() {

    return this.http.post(`${baseUrl}/user/${appKey}/_logout`, null, this.recipesService.httpKinveyOptions);
  }

  setUserAuth(userInfo) {
    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
    sessionStorage.setItem('names', `${userInfo.firstName} ${userInfo.lastName}`);
    sessionStorage.setItem('userId', userInfo._id);
  }
}
