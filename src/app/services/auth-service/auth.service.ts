import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Login } from 'src/app/models/login';
import { LoginResponse } from 'src/app/models/login-response';
import { Observable, of } from 'rxjs';
import { UserRole } from 'src/app/models/user-role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User | undefined;

  constructor(private readonly httpService: HttpClient) { }

  signup(user: User) {
    return this.httpService.post<User>("/api/v1/users/signup", user, {});
  }

  login(login: Login) {
    return this.httpService.post<LoginResponse>("/api/v1/users/login", login, {});
  }

  getUser(): Observable<User> {
    if (this.currentUser) {
      return of(this.currentUser)
    }
    else {
      /*return this.httpService.get<User>("/api/v1/users/user", {})
        .pipe(
          tap((user: User) => {
            this.currentUser = user;
          }))*/
      this.currentUser = {name: "Piotr", lastName: "Nowakowski", email: "abc@gmail.com", password: "Abc123", passwordConfirm: "Abc123", role: UserRole.Admin};
      return of (this.currentUser);
    }
  }
}
