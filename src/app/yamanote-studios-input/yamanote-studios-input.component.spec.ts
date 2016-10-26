/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YamanoteStudiosInputComponent } from './yamanote-studios-input.component';

describe('YamanoteStudiosInputComponent', () => {
  let component: YamanoteStudiosInputComponent;
  let fixture: ComponentFixture<YamanoteStudiosInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamanoteStudiosInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamanoteStudiosInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




describe('InputComponent with TCB', function(){
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [YamanoteStudiosInputComponent], });
    let fixture = TestBed.createComponent(YamanoteStudiosInputComponent);
    let component = fixture.componentInstance;

    it('should have an input element',() => {
      fixture = TestBed.createComponent(YamanoteStudiosInputComponent)
    })
  })
})
