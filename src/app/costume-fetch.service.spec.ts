import { TestBed } from '@angular/core/testing';

import { CostumeFetchService } from './costume-fetch.service';

describe('CostumeFetchService', () => {
  let service: CostumeFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumeFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
