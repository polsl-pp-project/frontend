import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarServiceService } from 'src/app/services/auth-service/car-service/car-service.service';

@Component({
  selector: 'app-add-car-page',
  templateUrl: './add-car-page.component.html',
  styleUrls: ['./add-car-page.component.scss']
})
export class AddCarPageComponent {

  submitted = false;

  constructor(private carService: CarServiceService,
    private fb: FormBuilder) { }

  get f(): {
    [key: string]: AbstractControl;
  } { return this.form.controls; }

  form: FormGroup = this.fb.group({
    
    carBrand: ['', [Validators.required]],
    price: ['', [Validators.required]],
    year: ['', [Validators.required]],
    mileage: ['', [Validators.required]],
    body: ['', [Validators.required]],
    fuelType: ['', [Validators.required]],
    transmission: ['', [Validators.required]],
    doors: ['', [Validators.required]],
    color: ['', [Validators.required]],
    drive: ['', [Validators.required]],
    power: ['', [Validators.required]],
    engineCapacity: ['', [Validators.required]],
    trunkCapacity: ['', [Validators.required]],
    fuelConsumption: ['', [Validators.required]],
    description: ['', [Validators.required]],
    car_image: ['', [Validators.required]],
  
  },
  )
  ;

  AddCar() {
    this.submitted = true;

    if(this.form.valid) {
      let car: Car = this.form.getRawValue();
      this.carService.AddCar(car).subscribe((response) => {
        console.log(response);
        
      })
    }
  }

  

}
