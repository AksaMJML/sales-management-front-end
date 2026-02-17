import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllItem } from './view-all-item';

describe('ViewAllItem', () => {
  let component: ViewAllItem;
  let fixture: ComponentFixture<ViewAllItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
