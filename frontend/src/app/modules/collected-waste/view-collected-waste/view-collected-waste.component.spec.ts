import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCollectedWasteComponent } from './view-collected-waste.component';

describe('ViewCollectedWasteComponent', () => {
  let component: ViewCollectedWasteComponent;
  let fixture: ComponentFixture<ViewCollectedWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCollectedWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCollectedWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
