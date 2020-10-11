import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerProfileComponent } from './update-customer-profile.component';

describe('UpdateCustomerProfileComponent', () => {
  let component: UpdateCustomerProfileComponent;
  let fixture: ComponentFixture<UpdateCustomerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
