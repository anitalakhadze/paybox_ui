import { TestBed } from '@angular/core/testing';

import { PayApiService } from './pay-api.service';

describe('PayApiService', () => {
  let service: PayApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
