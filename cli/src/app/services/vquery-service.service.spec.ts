import { TestBed } from '@angular/core/testing';

import { VqueryService } from './vquery.service';

describe('VqueryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VqueryService = TestBed.get(VqueryService);
    expect(service).toBeTruthy();
  });
});
