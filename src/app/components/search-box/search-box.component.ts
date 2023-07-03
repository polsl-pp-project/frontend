import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router) {
      this.activatedRoute.queryParams.subscribe((result) => {
        if (result['startDate'] && result['endDate']) {
          this.startDate.setValue(new Date(result['startDate']));
          this.endDate.setValue(new Date(result['endDate']));
        }
      })
    }

  @Output() foundCars: EventEmitter<Car[]> = new EventEmitter<Car[]>();

  startDate = new FormControl<Date | null>(new Date());

  endDate = new FormControl<Date | null>(new Date());

  search() {
    // request do api o wyszukanie samochodow, wynik emitowany tutaj
    this.activatedRoute.url.subscribe((url) => {
      console.log(url)
      if (url.length === 0 || url[0].path !== "reserve") {
        this.router.navigate(["reserve"], { queryParams: { startDate: this.startDate.value?.toISOString(), endDate: this.endDate.value?.toISOString()} });
        this.router
      }
      else {
        this.foundCars.emit([]);
      }
    })
  }
}

