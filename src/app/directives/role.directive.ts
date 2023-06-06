import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service/auth.service';
import { map, tap } from 'rxjs';
import { UserRole } from '../models/user-role';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {

  @Input() appRole: UserRole[] = [];
  
  constructor(private readonly authService: AuthService, private readonly el: ElementRef) { 
  }

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      if (!user) {
        this.el.nativeElement.style.display = 'none';
        return;
      }
      if (this.appRole?.length !== 0 && !this.appRole.find((role) => role === user.role)) {
        this.el.nativeElement.style.display = 'none';
        return;
      }
      this.el.nativeElement.style.display = '';
    });
  }
}
