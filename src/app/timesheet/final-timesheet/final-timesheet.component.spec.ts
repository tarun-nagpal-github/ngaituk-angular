import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTimesheetComponent } from './final-timesheet.component';

describe('FinalTimesheetComponent', () => {
  let component: FinalTimesheetComponent;
  let fixture: ComponentFixture<FinalTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
