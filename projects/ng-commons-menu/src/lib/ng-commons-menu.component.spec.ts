import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCommonsMenuComponent } from './ng-commons-menu.component';

describe('NgCommonsMenuComponent', () => {
  let component: NgCommonsMenuComponent;
  let fixture: ComponentFixture<NgCommonsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCommonsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCommonsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
