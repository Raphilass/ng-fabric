import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NormalPeoplePickerComponent } from "./normal-people-picker.component";

describe("PeoplePickerComponent", () => {
  let component: NormalPeoplePickerComponent;
  let fixture: ComponentFixture<NormalPeoplePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalPeoplePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalPeoplePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
