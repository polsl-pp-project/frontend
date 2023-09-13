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

  getCar(Id: number | undefined) {
    return this.httpService.get<APIResponse>(`/api/v1/cars/${Id}`, {})
      .pipe(map((result) => {
        result.data.car.car_image = "data:image/jpeg;base64," + result.data.car.car_image;
        return result;
      }))
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

  deleteCar(Id: number | undefined) {
    return this.httpService.delete<Car>(`/api/v1/cars/${Id}`, {})
}

getAvailableCars(startDate: Date, endDate: Date): Observable<Car[]> {
  const requestData = {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString()
  };

  return this.httpService.post<APIResponse>('/api/v1/cars/available', requestData)
  .pipe(
    map((result) => {
      if (result.data && result.data.matchingCars) {
        // Assuming matchingCars is an array of Car objects
        return result.data.matchingCars.map((apiCar: any) => {
          apiCar.car_image = 'data:image/jpeg;base64,' + apiCar.car_image;
          return apiCar as Car;
        });
      } else {
        // Handle the case where matchingCars is not present or empty
        return [];
      }
    })
  );

}

}
