import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly httpService: HttpClient) { }

  signup(user: User) {
    return this.httpService.post<User>("/api/v1/users/signup", user, {});
  }
}
