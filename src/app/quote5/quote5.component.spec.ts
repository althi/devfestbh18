import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote5Component } from './quote5.component';

describe('Quote5Component', () => {
  let component: Quote5Component;
  let fixture: ComponentFixture<Quote5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quote5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quote5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
