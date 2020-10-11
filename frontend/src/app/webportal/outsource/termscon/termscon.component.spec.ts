import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsconComponent } from './termscon.component';

describe('TermsconComponent', () => {
  let component: TermsconComponent;
  let fixture: ComponentFixture<TermsconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
