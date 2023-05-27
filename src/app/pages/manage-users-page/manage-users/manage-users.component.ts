import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user-role';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent
{
  role = {
    [UserRole.User]: 'Użytkownik',
    [UserRole.Admin]: 'Administrator'
};


  users! : User[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getUsers().subscribe((result) => {
      this.users = result;
      console.log(result);
    })
  }

  ngOnDestroy() {
    
  }

}