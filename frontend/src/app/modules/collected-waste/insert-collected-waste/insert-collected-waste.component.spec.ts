import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCollectedWasteComponent } from './insert-collected-waste.component';

describe('InsertCollectedWasteComponent', () => {
  let component: InsertCollectedWasteComponent;
  let fixture: ComponentFixture<InsertCollectedWasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCollectedWasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCollectedWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
