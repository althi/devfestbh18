import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoductCodeComponent } from './coduct-code.component';

describe('CoductCodeComponent', () => {
  let component: CoductCodeComponent;
  let fixture: ComponentFixture<CoductCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoductCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoductCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
