import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = "";

  token: string | null = "";

  constructor(private readonly authService: AuthService,
    private readonly activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {

  }

  get f(): {
    [key: string]: AbstractControl;
  } { return this.form.controls; }

  form: FormGroup = this.fb.group({
    email: ['jcieslik15@gmail.com', [Validators.required, Validators.email]],
  })
  

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    if (!this.token) {
      // formatka do wypełnienia emaila, po wysłaniu resetPassword
      this.resetPassword(); // do wywalenia po zrobieniu formatki
    }
    else {
      // formatka do wypełnienia hasła nowego i potwierdzenia
    }
  }
  
  // na przycisku submit w formatce
  resetPassword() {
    let email: string = this.form.controls['email'].getRawValue();
    this.authService.forgotPassword(email).subscribe((result) => {
      console.log(result)
    })
  }
}
