import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user-role';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userRole = UserRole;
  name: string | undefined;

  constructor(
    
    private readonly _router: Router,
    private readonly authService: AuthService,

  ) {}

    ngOnInit() {
      this.authService.getUser().subscribe((resp) => {
        this.name = resp?.name
        console.log(this.name);
    })}

  onLogout(): void {

    localStorage.clear();
    window.location.reload();
    this._router.navigateByUrl('home');
  }
}
