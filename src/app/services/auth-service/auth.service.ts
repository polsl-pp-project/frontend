import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Login } from 'src/app/models/login';
import { LoginResponse } from 'src/app/models/login-response';
import { Observable, Subscription, interval, of, map } from 'rxjs';
import { UserRole } from 'src/app/models/user-role';
import { parseJwt } from 'src/app/helpers/jwtHelper';
import { APIResponse } from 'src/app/models/response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subscription!: Subscription;

  private currentUser: User | undefined;

  constructor(private readonly httpService: HttpClient) {
    this.refresh()
    const source = interval(60000);
    this.subscription = source.subscribe(() => this.refresh());
  }

  signup(user: User) {
    return this.httpService.post<User>("/api/v1/users/signup", user, {});
  }

  login(login: Login) {
    return this.httpService.post<LoginResponse>("/api/v1/users/login", login, {});
  }

  getUsers(): Observable<User[]> {
    return this.httpService.get<APIResponse>(`/api/v1/users/`, {})
    .pipe(map((result: any) => {
      return result.data.users;
    }))
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
      this.currentUser = { name: "Piotr", lastName: "Nowakowski", email: "abc@gmail.com", password: "Abc123", passwordConfirm: "Abc123", role: UserRole.Admin };
      return of(this.currentUser);
    }
  }

  refresh() {
    try {
      var token = parseJwt(localStorage.getItem('token') ?? "");
      var expirationDate = new Date(token.exp * 1000);
      if (expirationDate.getTime() - new Date().getTime() < 60000 && expirationDate.getTime() - new Date().getTime() > 0) {
        return this.httpService.get<any>("/api/v1/users/refresh", {})
          .subscribe((result) => {
            localStorage.setItem('token', result.newToken);
          })
      }
      else if (expirationDate.getTime() - new Date().getTime() < 0) {
        localStorage.removeItem('token');
      }
      return;
    }
    catch (ex) {
      return;
    }
  }

  forgotPassword(email: string) {
    return this.httpService.post("/api/v1/users/forgotPassword", { email: email }, {});
  }
}
