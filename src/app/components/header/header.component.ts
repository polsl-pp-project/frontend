import { Component } from '@angular/core';
import { UserRole } from 'src/app/models/user-role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userRole = UserRole;
}
