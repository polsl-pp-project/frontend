import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  constructor(
    private _snackBar: MatSnackBar
  ) {}


  serverSuccessfulLogin(): void {
    
    this._snackBar.open('Udało się zalogować', 'Zamknij', {
      panelClass: 'success-snackbar',
      duration: 10000,
    });
  }

  serverSuccessfulRegister(): void {
    
    this._snackBar.open('Udało się Zarejestrować', 'Zamknij', {
      panelClass: 'success-snackbar',
      duration: 10000,
    });
  }
}
