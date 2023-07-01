import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserRole } from 'src/app/models/user-role';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  private readonly _destroy$ = new Subject<void>();

  role = {
    [UserRole.User]: 'Użytkownik',
    [UserRole.Admin]: 'Administrator'
};


  users! : User[];

  constructor(
    private authService: AuthService,
    private readonly _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.authService.getUsers().subscribe((result) => {
      this.users = result;
      console.log(result);
    })
  }

  onDelete(Id: string | undefined): void {
    this.authService
      .deleteUser(Id)
      .pipe(
        catchError(() => {
          this._snackBar.open('Nie udało się usunąć użytkownika', 'OK', {
            duration: 5000,
            panelClass: ['red-snackbar'],
          });
          return EMPTY;
        }),
        takeUntil(this._destroy$)
      )
      .subscribe(() => {
        window.location.reload();
        this._snackBar.open('Udało się usunąć użytkownika!', 'OK', {
          duration: 50000,
        });
      });
    }

  ngOnDestroy() {
    
  }

}