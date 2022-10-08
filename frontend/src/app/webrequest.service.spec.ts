import { TestBed } from '@angular/core/testing';

import { WebrequestService } from './webrequest.service';

describe('WebrequestService', () => {
  let service: WebrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
