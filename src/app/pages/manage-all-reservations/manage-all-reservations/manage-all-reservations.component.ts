import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-manage-all-reservations',
  templateUrl: './manage-all-reservations.component.html',
  styleUrls: ['./manage-all-reservations.component.scss']
})
export class ManageAllReservationsComponent implements OnInit {
  private readonly _destroy$ = new Subject<void>();



  reservations: Reservation[] = [];

  constructor(private readonly reservationService: ReservationService,
    private readonly _snackBar: MatSnackBar, private readonly authService: AuthService) {

  }

  ngOnInit() {
    this.reservationService.getReservations().subscribe((result) => {
      this.reservations = result;
      console.log(result);
    });
  }
  
  onDelete(Id: string | undefined): void {
    this.authService.getUser().subscribe((user) => {
      if (user && user.reservations) {
        this.reservationService.deleteReservation(Id)
          .pipe(
            catchError(() => {
              this._snackBar.open('Nie udało się usunąć rezerwacji :(', 'OK', {
                duration: 5000,
                panelClass: ['red-snackbar'],
              });
              return EMPTY;
            }),
            takeUntil(this._destroy$)
          )
          .subscribe(() => {
            window.location.reload();
            this._snackBar.open('Udało się usunąć wybraną rezerwację!', 'OK', {
              duration: 5000,
            });
          });
      } else {
        
      }
    });
  }
  
}  