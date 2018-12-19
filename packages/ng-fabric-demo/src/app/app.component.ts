import { Component, ViewChild, AfterViewInit } from "@angular/core";
import {
  IButton,
  IIconProps,
  IconType,
  INavLinkGroup,
  IPersonaProps,
  IPersonaSharedProps,
  ISuggestionsProps,
  IBasePickerSuggestionsProps,
  IBreadcrumbItem,
  IChoiceGroupOptionProps,
  IChoiceGroupOption,
  IComboBoxOption
} from "office-ui-fabric-react";
import { IComponentEvent } from "@eswarpr/ng-react-proxy/src/component-event";
import { NormalPeoplePickerComponent } from "packages/ng-fabric/src/lib/normal-people-picker/normal-people-picker.component";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
import { people } from "./PickerExampleData";
import { IComboBoxOptionClassNames } from "office-ui-fabric-react/lib/components/ComboBox/ComboBox.classNames";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
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
}
