import { TestBed } from '@angular/core/testing';

import { FirebaseQserviceviService } from './firebase-qservicevi.service';

describe('FirebaseQserviceviService', () => {
  let service: FirebaseQserviceviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseQserviceviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
