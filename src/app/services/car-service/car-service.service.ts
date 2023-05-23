import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private readonly httpService: HttpClient) { }

  AddCar(car: Car) {
    return this.httpService.post<Car>("/api/v1/cars/", car, {});
  }

  getCar(id: string) {
    return this.httpService.get<Car>("/api/v1/cars/${id}", {});
  }

  getAllCars() {
    return this.httpService.get<Car[]>("api/v1/cars/", {});
  }
}

