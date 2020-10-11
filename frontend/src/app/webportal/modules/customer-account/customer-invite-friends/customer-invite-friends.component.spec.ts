import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInviteFriendsComponent } from './customer-invite-friends.component';

describe('CustomerInviteFriendsComponent', () => {
  let component: CustomerInviteFriendsComponent;
  let fixture: ComponentFixture<CustomerInviteFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInviteFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInviteFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
