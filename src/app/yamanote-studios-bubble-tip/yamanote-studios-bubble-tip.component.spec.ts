/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YamanoteStudiosBubbleTipComponent } from './yamanote-studios-bubble-tip.component';

describe('YamanoteStudiosBubbleTipComponent', () => {
  let component: YamanoteStudiosBubbleTipComponent;
  let fixture: ComponentFixture<YamanoteStudiosBubbleTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamanoteStudiosBubbleTipComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamanoteStudiosBubbleTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
