import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpService: HttpClient) { }

  signup(user: User) {
    return this.httpService.post<User>("/api/v1/users/signup", user, {});
  }

  login(login: Login) {
    return this.httpService.post<Login>("/api/v1/users/login", login, {});
  }
}
