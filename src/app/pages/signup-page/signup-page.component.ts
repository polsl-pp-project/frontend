import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ResponseService } from 'src/app/services/response-service/response.service';
import { ConfirmedValidator } from 'src/app/validator/confirmed.validator';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  submitted = false;

  constructor(private authService: AuthService,
    private readonly responseService: ResponseService,
    private fb: FormBuilder,
    private router: Router) { }

  get f(): {
    [key: string]: AbstractControl;
  } { return this.form.controls; }

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)],]
    
  },
  { 
    validator: ConfirmedValidator('password', 'passwordConfirm')
  })
  ;

  signup() {
    this.submitted = true;

    if(this.form.valid) {
      let user: User = this.form.getRawValue();
      this.authService.signup(user).subscribe((response) => {
        this.router.navigate(['/home']).then(()=> 
      this.responseService.serverSuccessfulRegister());
        
      })
    }
  }

  
}
