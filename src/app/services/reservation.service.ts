import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Reservation } from '../models/reservation';
import { APIResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private readonly httpService: HttpClient) { }

  createReservation(reservation: Reservation) {
    return this.httpService.post<Reservation>("/api/v1/reservations/", reservation, {});
  }

  getReservationById(reservationId: string): Observable<Reservation> {
    return this.httpService.get<APIResponse>(`/api/v1/reservations/${reservationId}`)
      .pipe(
        tap((response) => {
          console.log('API Response:', response);
        }),
        map((response: APIResponse) => {
          return response.data as Reservation;
        })
      );
  }

  getReservations(): Observable<Reservation[]> {
    return this.httpService.get<APIResponse>(`/api/v1/reservations/`, {})
      .pipe(map((result: any) => {
        return result.data.reservations;
      }))
  }

  deleteReservation(Id: string | undefined) {
    return this.httpService.delete<Reservation>(`/api/v1/reservations/${Id}`, {})
}
}
