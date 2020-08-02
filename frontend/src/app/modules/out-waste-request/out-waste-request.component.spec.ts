import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutWasteRequestComponent } from './out-waste-request.component';

describe('OutWasteRequestComponent', () => {
  let component: OutWasteRequestComponent;
  let fixture: ComponentFixture<OutWasteRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutWasteRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutWasteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
