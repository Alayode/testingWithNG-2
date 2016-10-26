/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YamanoteStudiosTitleDropdownComponent } from './yamanote-studios-title-dropdown.component';

describe('YamanoteStudiosTitleDropdownComponent', () => {
  let component: YamanoteStudiosTitleDropdownComponent;
  let fixture: ComponentFixture<YamanoteStudiosTitleDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamanoteStudiosTitleDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamanoteStudiosTitleDropdownComponent);
    component = fixture.componentInstance;
  ;

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  })
  });
