import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOffertComponent } from './car-offert.component';

describe('CarOffertComponent', () => {
  let component: CarOffertComponent;
  let fixture: ComponentFixture<CarOffertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarOffertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarOffertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
