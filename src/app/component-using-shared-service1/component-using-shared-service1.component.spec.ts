import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUsingSharedService1Component } from './component-using-shared-service1.component';

describe('ComponentUsingSharedService1Component', () => {
  let component: ComponentUsingSharedService1Component;
  let fixture: ComponentFixture<ComponentUsingSharedService1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentUsingSharedService1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentUsingSharedService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
