import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WptermsComponent } from './wpterms.component';

describe('WptermsComponent', () => {
  let component: WptermsComponent;
  let fixture: ComponentFixture<WptermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WptermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WptermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
