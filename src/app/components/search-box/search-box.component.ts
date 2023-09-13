import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((result) => {
      if (result['startDate'] && result['endDate']) {
        this.startDate.setValue(moment(result['startDate']));
        this.endDate.setValue(moment(result['endDate']));
      }
    });
  }

  @Output() foundCars: EventEmitter<{ startDate: Date, endDate: Date }> = new EventEmitter();

  startDate = new FormControl<moment.Moment | null>(moment());
  endDate = new FormControl<moment.Moment | null>(moment());

  search() {
    // Używamy Moment.js do parsowania i formatowania dat
    const startDateValue = this.startDate.value?.toDate() || new Date();
    const endDateValue = this.endDate.value?.toDate() || new Date();

  
    this.foundCars.emit({
      startDate: startDateValue,
      endDate: endDateValue
    });

    // Przeniesienie tej części logiki do routingu
    this.router.navigate(["reserve"], {
      queryParams: {
        startDate: startDateValue.toISOString(),
        endDate: endDateValue.toISOString()
      }
    });
  }
}
