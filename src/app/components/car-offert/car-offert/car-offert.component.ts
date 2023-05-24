import { Component, Input } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-offert',
  templateUrl: './car-offert.component.html',
  styleUrls: ['./car-offert.component.scss']
})
export class CarOffertComponent {

  @Input() car!: Car;

}
