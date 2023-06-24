import { TestBed } from '@angular/core/testing';

import { MinisterioServiceService } from './ministerio-service.service';

describe('MinisterioServiceService', () => {
  let service: MinisterioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinisterioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
