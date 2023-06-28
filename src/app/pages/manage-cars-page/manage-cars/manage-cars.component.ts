import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarServiceService } from 'src/app/services/car-service/car-service.service';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.scss']
})
export class ManageCarsComponent implements OnInit {
  private readonly _destroy$ = new Subject<void>();



  Cars: Car[] = [];

  constructor(private readonly carService: CarServiceService,
    private readonly _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.carService.getCars().subscribe((result) => {
      this.Cars = result;
      console.log(result);
    })
  }

  onDelete(Id: number | undefined): void {
    this.carService
      .deleteCar(Id)
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
          duration: 5000,
        });
      });
    }
    ngOnDestroy() { }
  
}
