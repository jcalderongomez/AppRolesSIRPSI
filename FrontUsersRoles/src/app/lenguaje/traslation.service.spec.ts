import { TestBed } from '@angular/core/testing';

import { TraslationService } from './traslation.service';

describe('TraslationService', () => {
  let service: TraslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
