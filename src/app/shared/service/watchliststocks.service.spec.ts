import { TestBed } from '@angular/core/testing';

import { WatchliststocksService } from './watchliststocks.service';

describe('WatchliststocksService', () => {
  let service: WatchliststocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchliststocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
