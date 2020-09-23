import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseBorrowingComponent } from './close-borrowing.component';

describe('CloseBorrowingComponent', () => {
  let component: CloseBorrowingComponent;
  let fixture: ComponentFixture<CloseBorrowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseBorrowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseBorrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
