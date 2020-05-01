import { TestBed } from '@angular/core/testing';

import { AgeWiseService } from './age-wise.service';

describe('AgeWiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgeWiseService = TestBed.get(AgeWiseService);
    expect(service).toBeTruthy();
  });
});
