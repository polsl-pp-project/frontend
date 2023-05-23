import { Component } from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service/car-service.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {

allCars: Car[] = [];

constructor(private carService: CarServiceService) {}




}
