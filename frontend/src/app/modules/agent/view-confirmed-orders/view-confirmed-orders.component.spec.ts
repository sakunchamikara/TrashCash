import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfirmedOrdersComponent } from './view-confirmed-orders.component';

describe('ViewConfirmedOrdersComponent', () => {
  let component: ViewConfirmedOrdersComponent;
  let fixture: ComponentFixture<ViewConfirmedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConfirmedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfirmedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
