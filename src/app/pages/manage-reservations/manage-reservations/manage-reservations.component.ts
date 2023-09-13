import { Component, OnInit } from '@angular/core';
import { catchError, forkJoin, of } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-manage-reservations',
  templateUrl: './manage-reservations.component.html',
  styleUrls: ['./manage-reservations.component.scss']
})
export class ManageReservationsComponent implements OnInit {
  reservations: Reservation[] | null = null;
  dataLoaded: boolean = false; // Dodatkowa zmienna do śledzenia, czy dane zostały wczytane

  constructor(private readonly authService: AuthService, private readonly reservationService: ReservationService) { }

  ngOnInit() {
    this.authService.getUser().subscribe((resp) => {
      if (resp?.reservations) {
        const reservationIds = resp.reservations;
        this.loadReservations(reservationIds);
        
      } else {
        this.reservations = null;
        this.dataLoaded = true; // Oznaczamy dane jako wczytane, nawet jeśli nie ma rezerwacji
      }
    });
  }
  
  loadReservations(reservationIds: string[]) {
    // Załaduj dane rezerwacji na podstawie identyfikatorów
    const observables = reservationIds.map((reservId) => {
      return this.reservationService.getReservationById(reservId)
        .pipe(
          catchError((error) => {
            console.error(`Błąd podczas pobierania rezerwacji o id ${reservId}:`, error);
            return of(null); // Zwracamy null, aby zaznaczyć, że wystąpił błąd
          })
        );
    });
  
    // Kiedy wszystkie zapytania zakończą się sukcesem lub błędem, przypisz wyniki do this.reservations
    forkJoin(observables).subscribe((results: (Reservation | null)[]) => {
      // results zawiera wyniki wszystkich zapytań, w tym te, które zakończyły się błędem (null)
      this.reservations = results.filter((result) => result !== null) as Reservation[];
      this.dataLoaded = true; // Oznaczamy dane jako wczytane
    });
  }
}
