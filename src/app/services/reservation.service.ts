import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private readonly httpService: HttpClient) { }

  createReservation(reservation: Reservation) {
    return this.httpService.post<Reservation>("/api/v1/reservations/", reservation, {});
  }
}
