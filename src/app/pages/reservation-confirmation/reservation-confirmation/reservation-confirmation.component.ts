import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Car } from 'src/app/models/car';
import { Reservation } from 'src/app/models/reservation';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { CarServiceService } from 'src/app/services/car-service/car-service.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-confirmation',
  templateUrl: './reservation-confirmation.component.html',
  styleUrls: ['./reservation-confirmation.component.scss']
})
export class ReservationConfirmationComponent implements OnInit {
  startDate: Date | undefined;
  endDate: Date | undefined;
  rentalPrice: number | undefined;
  carId: number | undefined;
  car!: Car;
  pickupLocation: string = ''; 
  returnLocation: string = '';
  _id!: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly carService: CarServiceService,
    private readonly authService: AuthService,
    private readonly reservationService: ReservationService,
   
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.startDate = new Date(queryParams['startDate']);
      this.endDate = new Date(queryParams['endDate']);
      this.rentalPrice = +queryParams['rentalPrice'];
      this.carId = queryParams['carId'];
  
      this.carService.getCar(this.carId).subscribe((resp) => {
        this.car = resp.data.car;
        console.log(this.car);
      });
    });
  }
  
  createReservation() {
    this.authService.getUser().subscribe((resp) => {
      this._id = resp?.customId;
  
      const reservation: Partial<Reservation> = {
        startDate: this.startDate,
        endDate: this.endDate,
        carNumber: this.carId,
        startPlace: this.pickupLocation,
        endPlace: this.returnLocation,
        userId: this._id,
      };
  
      // Wywołaj funkcję tworzenia rezerwacji w serwisie
      this.reservationService.createReservation(reservation as Reservation).subscribe((response) => {
        console.log(response);
        // Tutaj możesz dodać przekierowanie lub inne działania po utworzeniu rezerwacji
      });
    });
  }
  
}
