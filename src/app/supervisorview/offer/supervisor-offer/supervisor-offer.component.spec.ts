import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorOfferComponent } from './supervisor-offer.component';

describe('SupervisorOfferComponent', () => {
  let component: SupervisorOfferComponent;
  let fixture: ComponentFixture<SupervisorOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
