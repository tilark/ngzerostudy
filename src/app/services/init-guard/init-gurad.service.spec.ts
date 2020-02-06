import { TestBed } from '@angular/core/testing';

import { InitGuradService } from './init-gurad.service';

describe('InitGuradService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitGuradService = TestBed.get(InitGuradService);
    expect(service).toBeTruthy();
  });
});
