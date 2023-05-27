import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarServiceService } from 'src/app/services/car-service/car-service.service';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.scss']
})
export class ManageCarsComponent {

 

  Cars: Car[] = [];

  constructor(private readonly carService: CarServiceService) {

  }

  ngOnInit() {
    this.carService.getCars().subscribe((result) => {
      this.Cars = result;
      console.log(result);
    })
  }

  ngOnDestroy() {
  }
}
