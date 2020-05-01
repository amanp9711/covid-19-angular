import { TestBed } from '@angular/core/testing';

import { DayWiseService } from './day-wise.service';

describe('DayWiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DayWiseService = TestBed.get(DayWiseService);
    expect(service).toBeTruthy();
  });
});
