import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteRequestComponent } from './waste-request.component';

describe('WasteRequestComponent', () => {
  let component: WasteRequestComponent;
  let fixture: ComponentFixture<WasteRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WasteRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WasteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
