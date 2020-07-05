import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProductsComponent } from './insert-products.component';

describe('InsertProductsComponent', () => {
  let component: InsertProductsComponent;
  let fixture: ComponentFixture<InsertProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
