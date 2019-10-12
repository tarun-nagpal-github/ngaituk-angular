import { TestBed } from '@angular/core/testing';

import { Api.ContractorsService } from './api.contractors.service';

describe('Api.ContractorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Api.ContractorsService = TestBed.get(Api.ContractorsService);
    expect(service).toBeTruthy();
  });
});
