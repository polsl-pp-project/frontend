import { Component } from '@angular/core';




@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  startDate = new Date(1990, 0, 1);

}

