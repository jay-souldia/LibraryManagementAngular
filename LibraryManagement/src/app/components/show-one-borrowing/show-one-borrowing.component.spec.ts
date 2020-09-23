import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneBorrowingComponent } from './show-one-borrowing.component';

describe('ShowOneBorrowingComponent', () => {
  let component: ShowOneBorrowingComponent;
  let fixture: ComponentFixture<ShowOneBorrowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOneBorrowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneBorrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
