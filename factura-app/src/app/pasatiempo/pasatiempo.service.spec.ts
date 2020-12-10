import { TestBed } from '@angular/core/testing';

import { PasatiempoService } from './pasatiempo.service';

describe('PasatiempoService', () => {
  let service: PasatiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasatiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
