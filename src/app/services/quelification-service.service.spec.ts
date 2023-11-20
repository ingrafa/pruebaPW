import { TestBed } from '@angular/core/testing';

import { QuelificationServiceService } from './quelification-service.service';

describe('QuelificationServiceService', () => {
  let service: QuelificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuelificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
