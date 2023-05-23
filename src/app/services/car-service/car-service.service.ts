import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Car } from 'src/app/models/car';
import { APIResponse } from 'src/app/models/response';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private readonly httpService: HttpClient) { }

  AddCar(car: Car) {
    return this.httpService.post<Car>("/api/v1/cars/", car, {});
  }

  getCar(number: string) {
    return this.httpService.get<Car>(`/api/v1/cars/${number}`, {});
  }

  getCars(): Observable<Car[]> {
    return this.httpService.get<APIResponse>(`/api/v1/cars/`, {})
      .pipe(map((result) => {
        result.data.cars.forEach((element: Car) => {
          element.car_image = "data:image/jpeg;base64," + element.car_image;
        });
        return result.data.cars;
      }))
  }
}
