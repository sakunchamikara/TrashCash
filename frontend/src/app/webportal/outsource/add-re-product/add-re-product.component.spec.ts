import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReProductComponent } from './add-re-product.component';

describe('AddReProductComponent', () => {
  let component: AddReProductComponent;
  let fixture: ComponentFixture<AddReProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
