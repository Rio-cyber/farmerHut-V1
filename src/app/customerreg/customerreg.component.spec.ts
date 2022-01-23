import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerregComponent } from './customerreg.component';

describe('CustomerregComponent', () => {
  let component: CustomerregComponent;
  let fixture: ComponentFixture<CustomerregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
