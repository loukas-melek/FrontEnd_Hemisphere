import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewTComponent } from './companyview-t.component';

describe('CompanyviewTComponent', () => {
  let component: CompanyviewTComponent;
  let fixture: ComponentFixture<CompanyviewTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyviewTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyviewTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
