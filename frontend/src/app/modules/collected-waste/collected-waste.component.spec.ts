import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedWasteComponent } from './collected-waste.component';

describe('CollectedWasteComponent', () => {
  let component: CollectedWasteComponent;
  let fixture: ComponentFixture<CollectedWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectedWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
