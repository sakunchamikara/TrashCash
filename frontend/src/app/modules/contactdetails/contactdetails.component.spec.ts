import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdetailsComponent } from './contactdetails.component';

describe('ContactdetailsComponent', () => {
  let component: ContactdetailsComponent;
  let fixture: ComponentFixture<ContactdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
