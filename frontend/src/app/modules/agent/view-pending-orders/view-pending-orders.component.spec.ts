import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPendingOrdersComponent } from './view-pending-orders.component';

describe('ViewPendingOrdersComponent', () => {
  let component: ViewPendingOrdersComponent;
  let fixture: ComponentFixture<ViewPendingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPendingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
