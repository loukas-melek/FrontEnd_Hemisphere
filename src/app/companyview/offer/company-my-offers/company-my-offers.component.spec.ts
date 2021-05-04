import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMyOffersComponent } from './company-my-offers.component';

describe('CompanyMyOffersComponent', () => {
  let component: CompanyMyOffersComponent;
  let fixture: ComponentFixture<CompanyMyOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMyOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMyOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
