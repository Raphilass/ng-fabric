import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundButtonComponent } from './compound-button.component';

describe('CompoundButtonComponent', () => {
  let component: CompoundButtonComponent;
  let fixture: ComponentFixture<CompoundButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
