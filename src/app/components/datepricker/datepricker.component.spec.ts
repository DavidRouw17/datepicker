import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateprickerComponent } from './datepricker.component';

describe('DateprickerComponent', () => {
  let component: DateprickerComponent;
  let fixture: ComponentFixture<DateprickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateprickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateprickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
