import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCollectedWasteComponent } from './update-collected-waste.component';

describe('UpdateCollectedWasteComponent', () => {
  let component: UpdateCollectedWasteComponent;
  let fixture: ComponentFixture<UpdateCollectedWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCollectedWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCollectedWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
