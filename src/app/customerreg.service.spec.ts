import { TestBed } from '@angular/core/testing';

import { CustomerregService } from './customerreg.service';

describe('CustomerregService', () => {
  let service: CustomerregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
