import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUsingSharedService2Component } from './component-using-shared-service2.component';

describe('ComponentUsingSharedService2Component', () => {
  let component: ComponentUsingSharedService2Component;
  let fixture: ComponentFixture<ComponentUsingSharedService2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentUsingSharedService2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentUsingSharedService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
