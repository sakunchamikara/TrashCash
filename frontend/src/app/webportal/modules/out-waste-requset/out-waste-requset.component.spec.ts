import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutWasteRequsetComponent } from './out-waste-requset.component';

describe('OutWasteRequsetComponent', () => {
  let component: OutWasteRequsetComponent;
  let fixture: ComponentFixture<OutWasteRequsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutWasteRequsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutWasteRequsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
