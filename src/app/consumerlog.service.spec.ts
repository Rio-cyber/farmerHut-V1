import { TestBed } from '@angular/core/testing';

import { ConsumerlogService } from './consumerlog.service';

describe('ConsumerlogService', () => {
  let service: ConsumerlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
