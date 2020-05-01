import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWiseDataComponent } from './day-wise-data.component';

describe('DayWiseDataComponent', () => {
  let component: DayWiseDataComponent;
  let fixture: ComponentFixture<DayWiseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayWiseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWiseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
