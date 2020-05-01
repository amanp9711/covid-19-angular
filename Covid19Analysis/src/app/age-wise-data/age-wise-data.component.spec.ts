import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeWiseDataComponent } from './age-wise-data.component';

describe('AgeWiseDataComponent', () => {
  let component: AgeWiseDataComponent;
  let fixture: ComponentFixture<AgeWiseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeWiseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeWiseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
