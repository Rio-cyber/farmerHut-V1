import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcropComponent } from './showcrop.component';

describe('ShowcropComponent', () => {
  let component: ShowcropComponent;
  let fixture: ComponentFixture<ShowcropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
