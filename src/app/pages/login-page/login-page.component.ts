import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Login } from 'src/app/models/login'
import { SessionService } from 'src/app/services/session-service/session.service';
 
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  submitted = false;

  constructor(private authService: AuthService,
    private sessionService: SessionService,
    private fb: FormBuilder) { }

  get f(): {
    [key: string]: AbstractControl;
  } { return this.form.controls; }

  form: FormGroup = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
    
  })
  

  login() {
    this.submitted = true;
     let login: Login = this.form.getRawValue();
      this.authService.login(login).subscribe((response) => {
        this.sessionService.setToken(response.token);
      })
    }
  }


