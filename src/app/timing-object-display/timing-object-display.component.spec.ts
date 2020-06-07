import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingObjectDisplayComponent } from './timing-object-display.component';

describe('TimingObjectDisplayComponent', () => {
  let component: TimingObjectDisplayComponent;
  let fixture: ComponentFixture<TimingObjectDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingObjectDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingObjectDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
