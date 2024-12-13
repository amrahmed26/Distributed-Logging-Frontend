import { TestBed } from '@angular/core/testing';

import { loggedEntriesService } from './loggedEntries.service';

describe('loggedEntriesService', () => {
  let service: loggedEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(loggedEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
