import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllOrders } from './view-all-orders';

describe('ViewAllOrders', () => {
  let component: ViewAllOrders;
  let fixture: ComponentFixture<ViewAllOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllOrders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllOrders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
