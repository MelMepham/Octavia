import { TestBed } from '@angular/core/testing';

import { OctaviaService } from './octavia.service';

describe('OctaviaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OctaviaService = TestBed.get(OctaviaService);
    expect(service).toBeTruthy();
  });
});
