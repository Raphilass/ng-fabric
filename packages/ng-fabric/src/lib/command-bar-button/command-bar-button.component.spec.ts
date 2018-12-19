import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandBarButtonComponent } from './command-bar-button.component';

describe('CommandBarButtonComponent', () => {
  let component: CommandBarButtonComponent;
  let fixture: ComponentFixture<CommandBarButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandBarButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandBarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
