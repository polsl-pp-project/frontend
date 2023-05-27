import { Directive, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';

@Directive({
  selector: '[appIsLoggedIn]'
})
export class IsLoggedInDirective {

  constructor(private readonly authService: AuthService, private readonly el: ElementRef) { 
  }

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.el.nativeElement.style.display = 'none';
        return;
      }
    });
  }

}
