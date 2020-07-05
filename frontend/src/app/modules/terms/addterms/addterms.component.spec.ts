import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtermsComponent } from './addterms.component';

describe('AddtermsComponent', () => {
  let component: AddtermsComponent;
  let fixture: ComponentFixture<AddtermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
