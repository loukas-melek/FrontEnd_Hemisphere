import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsOfferComponent } from './student-details-offer.component';

describe('StudentDetailsOfferComponent', () => {
  let component: StudentDetailsOfferComponent;
  let fixture: ComponentFixture<StudentDetailsOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
