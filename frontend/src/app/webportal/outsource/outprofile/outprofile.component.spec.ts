import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutprofileComponent } from './outprofile.component';

describe('OutprofileComponent', () => {
  let component: OutprofileComponent;
  let fixture: ComponentFixture<OutprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
