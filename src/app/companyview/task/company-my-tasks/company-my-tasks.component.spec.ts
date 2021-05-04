import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMyTasksComponent } from './company-my-tasks.component';

describe('CompanyMyTasksComponent', () => {
  let component: CompanyMyTasksComponent;
  let fixture: ComponentFixture<CompanyMyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMyTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
