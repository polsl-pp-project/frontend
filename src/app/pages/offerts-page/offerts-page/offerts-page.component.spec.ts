import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertsPageComponent } from './offerts-page.component';

describe('OffertsPageComponent', () => {
  let component: OffertsPageComponent;
  let fixture: ComponentFixture<OffertsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffertsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
