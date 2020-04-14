import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaiveTestComponent } from './naive-test.component';

describe('NaiveTestComponent', () => {
  let component: NaiveTestComponent;
  let fixture: ComponentFixture<NaiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaiveTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
