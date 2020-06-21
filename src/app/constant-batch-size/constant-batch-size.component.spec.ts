import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantBatchSizeComponent } from './constant-batch-size.component';

describe('ConstantBatchSizeComponent', () => {
  let component: ConstantBatchSizeComponent;
  let fixture: ComponentFixture<ConstantBatchSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstantBatchSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantBatchSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
