import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { APIResponse } from 'src/app/models/response';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { CarServiceService } from 'src/app/services/car-service/car-service.service';

@Component({
  selector: 'app-car-spec-page',
  templateUrl: './car-spec-page.component.html',
  styleUrls: ['./car-spec-page.component.scss']
})
export class CarSpecPageComponent {

  carId: number = 0;
  car!: Car;

  constructor( private readonly carService: CarServiceService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService,) {}

  async ngOnInit(): Promise<void> {
    const carId =
        this.activatedRoute.snapshot.paramMap.get('Id');
        if (!carId) {
          await this.router.navigate(['/home']);
          return;
      }
        this.carId = +carId;
        this.carService.getCar(this.carId).subscribe((data) => {
          this.car = data;
          console.log(data);
        })
   
}}
