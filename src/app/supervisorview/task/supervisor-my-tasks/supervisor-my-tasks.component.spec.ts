import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorMyTasksComponent } from './supervisor-my-tasks.component';

describe('SupervisorMyTasksComponent', () => {
  let component: SupervisorMyTasksComponent;
  let fixture: ComponentFixture<SupervisorMyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorMyTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorMyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
