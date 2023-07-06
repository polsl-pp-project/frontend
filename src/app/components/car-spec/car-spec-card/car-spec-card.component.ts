import { Component, Input } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-spec-card',
  templateUrl: './car-spec-card.component.html',
  styleUrls: ['./car-spec-card.component.scss']
})
export class CarSpecCardComponent {

  @Input() car!: Car;

}
