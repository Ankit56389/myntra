import { TestBed } from '@angular/core/testing';

import { AddRemoveService } from './add-remove.service';

describe('AddRemoveService', () => {
  let service: AddRemoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRemoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
