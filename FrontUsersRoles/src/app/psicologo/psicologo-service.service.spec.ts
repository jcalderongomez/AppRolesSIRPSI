import { TestBed } from '@angular/core/testing';

import { PsicologoServiceService } from './psicologo-service.service';

describe('PsicologoServiceService', () => {
  let service: PsicologoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsicologoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
