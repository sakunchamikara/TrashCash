import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProductCatComponent } from './insert-product-cat.component';

describe('InsertProductCatComponent', () => {
  let component: InsertProductCatComponent;
  let fixture: ComponentFixture<InsertProductCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertProductCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertProductCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
