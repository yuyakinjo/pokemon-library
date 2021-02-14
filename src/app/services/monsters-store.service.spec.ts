import { TestBed } from '@angular/core/testing';

import { MonstersStoreService } from './monsters-store.service';

describe('MonstersStoreService', () => {
  let service: MonstersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonstersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
