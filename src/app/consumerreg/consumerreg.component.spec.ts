import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerregComponent } from './consumerreg.component';

describe('ConsumerregComponent', () => {
  let component: ConsumerregComponent;
  let fixture: ComponentFixture<ConsumerregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
