import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialTestComponent } from './initial-test.component';

describe('InitialTestComponent', () => {
  let component: InitialTestComponent;
  let fixture: ComponentFixture<InitialTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
