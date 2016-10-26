/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YamanoteStudiosFooterComponent } from './yamanote-studios-footer.component';

describe('YamanoteStudiosFooterComponent', () => {
  let component: YamanoteStudiosFooterComponent;
  let fixture: ComponentFixture<YamanoteStudiosFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamanoteStudiosFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamanoteStudiosFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('A suite is just a function', function() {
  let a;

  it('and so is a spec', function() {
    a = true;

    expect(a).toBe(true);
  });
});
