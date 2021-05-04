import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorMyOffersComponent } from './supervisor-my-offers.component';

describe('SupervisorMyOffersComponent', () => {
  let component: SupervisorMyOffersComponent;
  let fixture: ComponentFixture<SupervisorMyOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorMyOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorMyOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
