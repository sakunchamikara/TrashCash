import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmWasteRequestComponent } from './confirm-waste-request.component';

describe('ConfirmWasteRequestComponent', () => {
  let component: ConfirmWasteRequestComponent;
  let fixture: ComponentFixture<ConfirmWasteRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmWasteRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmWasteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
