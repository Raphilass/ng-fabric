import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { INavLinkGroup, IPersonaSharedProps } from "office-ui-fabric-react";
import { NgForm } from "@angular/forms";
import { people } from "./PickerExampleData";
import { NormalPeoplePickerComponent } from "packages/ng-fabric/src/lib/normal-people-picker/normal-people-picker.component";
import { of } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  /**
   * The list of components to present in the Nav
   * component
   */
  _componentList: Array<INavLinkGroup> = [
    {
      name: "Buttons",
      links: [
        {
          name: "Default",
          key: "basic-buttons-default",
          title: "Default button",
          url: "#!/buttons/default"
        },
        {
          name: "Primary",
          key: "basic-buttons-primary",
          title: "Primary button",
          url: "#!/buttons/primary"
        },
        {
          name: "Compound",
          key: "basic-buttons-compound",
          title: "Compound button",
          url: "#!/buttons/compound"
        },
        {
          name: "Command Bar",
          key: "basic-buttons-command-bar",
          title: "Command bar button",
          url: "#!/buttons/command"
        },
        {
          name: "Action",
          key: "basic-buttons-action",
          title: "Action button",
          url: "#!/buttons/action"
        }
      ]
    },
    {
      name: "People Pickers",
      links: [
        {
          name: "Normal",
          key: "people-pickers-normal",
          title: "Normal people picker",
          url: "#!/people-pickers/normal"
        }
      ]
    },
    {
      name: "Utilities",
      links: [
        {
          name: "Icon",
          key: "utilities-icon",
          title: "Icon",
          url: "#!/utilities/icon"
        }
      ]
    }
  ];

  /**
   * Reference to the people picker on the page
   */
  @ViewChild("peoplePicker")
  _peoplePicker: NormalPeoplePickerComponent;

  /**
   * Specifies the list of people selected in the people picker
   */
  _selectedPeople: Array<IPersonaSharedProps>;

  /**
   * Handles the AfterViewInit event of this component
   */
  ngAfterViewInit() {
    this._peoplePicker.onResolveSuggestions = this._resolveSuggestions.bind(
      this
    );
  }

  /**
   * Resolves the people picker suggestions using the specified filter, if specified; or return
   * a list of entities
   */
  _resolveSuggestions(
    _filter?: string,
    selectedItems?: Array<IPersonaSharedProps>
  ) {
    if (_filter) {
      return people.filter(x => x.text.indexOf(_filter) > -1);
    }
    return of(people);
  }
}
