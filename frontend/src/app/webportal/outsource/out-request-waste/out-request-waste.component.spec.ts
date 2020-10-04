import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutRequestWasteComponent } from './out-request-waste.component';

describe('OutRequestWasteComponent', () => {
  let component: OutRequestWasteComponent;
  let fixture: ComponentFixture<OutRequestWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutRequestWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutRequestWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
