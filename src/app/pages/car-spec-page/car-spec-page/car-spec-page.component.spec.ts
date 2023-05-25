import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpecPageComponent } from './car-spec-page.component';

describe('CarSpecPageComponent', () => {
  let component: CarSpecPageComponent;
  let fixture: ComponentFixture<CarSpecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpecPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
