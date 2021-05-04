import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTasksComponent } from './company-tasks.component';

describe('CompanyTasksComponent', () => {
  let component: CompanyTasksComponent;
  let fixture: ComponentFixture<CompanyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
