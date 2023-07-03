import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reserve-car',
  templateUrl: './reserve-car.component.html',
  styleUrls: ['./reserve-car.component.css']
})
export class ReserveCarComponent {
  cars: Car[] = [];

  constructor(private readonly reservationService: ReservationService) { }

  displayCars(cars: Car[]) {
    this.cars = cars;
  }

  reserveCar() {
    var reservation: Reservation = {
      carNumber: 1,
      startDate: new Date(),
      endDate: new Date()
    }
    this.reservationService.createReservation(reservation).subscribe((result) => {
      
    });
  }
}
