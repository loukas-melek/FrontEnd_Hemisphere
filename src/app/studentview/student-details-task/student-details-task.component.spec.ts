import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsTaskComponent } from './student-details-task.component';

describe('StudentDetailsTaskComponent', () => {
  let component: StudentDetailsTaskComponent;
  let fixture: ComponentFixture<StudentDetailsTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailsTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
