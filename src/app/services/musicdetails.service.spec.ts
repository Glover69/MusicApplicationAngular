import { TestBed } from '@angular/core/testing';

import { MusicdetailsService } from './musicdetails.service';

describe('MusicdetailsService', () => {
  let service: MusicdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
