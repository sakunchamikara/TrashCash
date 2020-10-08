import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedOrdersComponent } from './completed-orders.component';

describe('CompletedOrdersComponent', () => {
  let component: CompletedOrdersComponent;
  let fixture: ComponentFixture<CompletedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
