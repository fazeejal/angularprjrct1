import { TestBed } from '@angular/core/testing';

import { Serviceproject1Service } from './serviceproject1.service';

describe('Serviceproject1Service', () => {
  let service: Serviceproject1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceproject1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
