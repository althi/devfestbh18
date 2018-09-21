import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgbhComponent } from './gdgbh.component';

describe('GdgbhComponent', () => {
  let component: GdgbhComponent;
  let fixture: ComponentFixture<GdgbhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdgbhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdgbhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
