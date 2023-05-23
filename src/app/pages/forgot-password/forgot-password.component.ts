import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = "";

  constructor(private readonly authService: AuthService,
    private fb: FormBuilder) {

  }

  get f(): {
    [key: string]: AbstractControl;
  } { return this.form.controls; }

  form: FormGroup = this.fb.group({
    email: ['jcieslik15@gmail.com', [Validators.required, Validators.email]],
  })
  

  ngOnInit(): void {
    this.resetPassword(); // do wywalenia po zrobieniu formatki
  }
  
  // na przycisku submit w formatce
  resetPassword() {
    let email: string = this.form.controls['email'].getRawValue();
    this.authService.forgotPassword(email).subscribe((result) => {
      console.log(result)
    })
  }
}
