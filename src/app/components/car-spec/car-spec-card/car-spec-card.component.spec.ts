import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpecCardComponent } from './car-spec-card.component';

describe('CarSpecCardComponent', () => {
  let component: CarSpecCardComponent;
  let fixture: ComponentFixture<CarSpecCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpecCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpecCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
