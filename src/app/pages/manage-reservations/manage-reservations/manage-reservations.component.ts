import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-manage-reservations',
  templateUrl: './manage-reservations.component.html',
  styleUrls: ['./manage-reservations.component.scss']
})
export class ManageReservationsComponent implements OnInit {

  reservations: Reservation[] | null = null;

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser().subscribe((resp) => {
      console.log(resp?.reservations);
      if (resp?.reservations) {
    
        this.reservations = resp.reservations as Reservation[]; // Cast to the correct type
      } else {
        this.reservations = null;
      }
    });
  }
}
