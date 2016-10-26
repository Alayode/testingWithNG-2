/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YamanoteStudiosCreditCardTypeDropdownComponent } from './yamanote-studios-credit-card-type-dropdown.component';

describe('YamanoteStudiosCreditCardTypeDropdownComponent', () => {
  let component: YamanoteStudiosCreditCardTypeDropdownComponent;
  let fixture: ComponentFixture<YamanoteStudiosCreditCardTypeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamanoteStudiosCreditCardTypeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamanoteStudiosCreditCardTypeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
