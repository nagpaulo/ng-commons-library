import { TestBed } from '@angular/core/testing';

import { NgCommonsMenuService } from './ng-commons-menu.service';

describe('NgCommonsMenuService', () => {
  let service: NgCommonsMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCommonsMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
