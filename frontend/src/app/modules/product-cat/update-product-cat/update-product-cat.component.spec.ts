import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductCatComponent } from './update-product-cat.component';

describe('UpdateProductCatComponent', () => {
  let component: UpdateProductCatComponent;
  let fixture: ComponentFixture<UpdateProductCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProductCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
