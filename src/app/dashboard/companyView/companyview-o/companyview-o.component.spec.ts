import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyviewOComponent } from './companyview-o.component';

describe('CompanyviewOComponent', () => {
  let component: CompanyviewOComponent;
  let fixture: ComponentFixture<CompanyviewOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyviewOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyviewOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
