import { TestBed } from '@angular/core/testing';

import { SubModulesActionService } from './sub-modules-action.service';

describe('SubModulesActionService', () => {
  let service: SubModulesActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubModulesActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
