import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAllReservationsComponent } from './manage-all-reservations.component';

describe('ManageAllReservationsComponent', () => {
  let component: ManageAllReservationsComponent;
  let fixture: ComponentFixture<ManageAllReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAllReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAllReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
