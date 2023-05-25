import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { CarServiceService } from 'src/app/services/car-service/car-service.service';

@Component({
  selector: 'app-car-spec-page',
  templateUrl: './car-spec-page.component.html',
  styleUrls: ['./car-spec-page.component.css']
})
export class CarSpecPageComponent {

  carId: number = -1;
  

  constructor( private readonly carService: CarServiceService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService,) {}

  async ngOnInit(): Promise<void> {
    const carId =
        this.activatedRoute.snapshot.paramMap.get('carId');
        this.carService.getCar(this.carId).subscribe((result) => {
          console.log(result);
        })
   
}}
