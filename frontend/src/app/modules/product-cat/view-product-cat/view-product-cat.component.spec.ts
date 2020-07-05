import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductCatComponent } from './view-product-cat.component';

describe('ViewProductCatComponent', () => {
  let component: ViewProductCatComponent;
  let fixture: ComponentFixture<ViewProductCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
