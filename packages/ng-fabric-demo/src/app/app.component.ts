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
  IComboBoxOption,
  IDropdownOption,
  PanelType,
  Panel,
  DayOfWeek,
  IDatePickerStrings
} from "office-ui-fabric-react";
import { IComponentEvent } from "@eswarpr/ng-react-proxy/src/component-event";
import { NormalPeoplePickerComponent } from "packages/ng-fabric/src/lib/normal-people-picker/normal-people-picker.component";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
import { people } from "./PickerExampleData";
import { IComboBoxOptionClassNames } from "office-ui-fabric-react/lib/components/ComboBox/ComboBox.classNames";
import { NgForm } from "@angular/forms";

const _datePickerStrings: IDatePickerStrings = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker'
};



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

_lower:number = 0;
_datePicked:Date;
_name:string;

  _handleSubmitForm(f:NgForm){
    console.log(f.value);
  }
  DropDown1:any;
  StartDate1:Date;

  showPanel: boolean = false;

  _onClosePanel(): void {
    this.showPanel = false;
  };

  private _text="";
  private _panelType = PanelType;

  _onShowPanel(): void {
    this.showPanel = true;
  };


  _dayOfWeek: DayOfWeek = DayOfWeek.Monday;

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

<<<<<<< HEAD
  _text = "Hello";
  
  _buttonClick = () => this._text = "Changed";
=======
  _dropDownOptions: Array<IDropdownOption> = [
    { key: 1, text: "Monday" },
    { key: 2, text: "Tuesday" },
    { key: 3, text: "Wednesday" },
    { key: 4, text: "Thursday" },
    { key: 5, text: "Friday" },
    { key: 6, text: "Saturday" },
    { key: 7, text: "Sunday" }
  ]

  _comboDownOptions: Array<IComboBoxOption> = [
    { key: 1, text: "Monday" },
    { key: 2, text: "Tuesday" },
    { key: 3, text: "Wednesday" },
    { key: 4, text: "Thursday" },
    { key: 5, text: "Friday" },
    { key: 6, text: "Saturday" },
    { key: 7, text: "Sunday" }
  ]

  handleOnFocus() {
    console.log("On Focus")
  }

  handleOnBlur() {
    console.log("On Blur")
  }

   getItems() {
    return [
      {
        key: 'newItem',
        name: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
        iconProps: {
          iconName: 'Add'
        },
        ariaLabel: 'New. Use left and right arrow keys to navigate',
        subMenuProps: {
          items: [
            {
              key: 'emailMessage',
              name: 'Email message',
              iconProps: {
                iconName: 'Mail'
              },
              ['data-automation-id']: 'newEmailButton'
            },
            {
              key: 'calendarEvent',
              name: 'Calendar event',
              iconProps: {
                iconName: 'Calendar'
              }
            }
          ]
        }
      },
      {
        key: 'upload',
        name: 'Upload',
        iconProps: {
          iconName: 'Upload'
        },
        href: 'https://dev.office.com/fabric',
        ['data-automation-id']: 'uploadButton'
      },
      {
        key: 'share',
        name: 'Share',
        iconProps: {
          iconName: 'Share'
        },
        onClick: () => console.log('Share')
      },
      {
        key: 'download',
        name: 'Download',
        iconProps: {
          iconName: 'Download'
        },
        onClick: () => console.log('Download')
      }
    ];
  };

   getOverflowItems()  {
    return [
      {
        key: 'move',
        name: 'Move to...',
        onClick: () => console.log('Move to'),
        iconProps: {
          iconName: 'MoveToFolder'
        }
      },
      {
        key: 'copy',
        name: 'Copy to...',
        onClick: () => console.log('Copy to'),
        iconProps: {
          iconName: 'Copy'
        }
      },
      {
        key: 'rename',
        name: 'Rename...',
        onClick: () => console.log('Rename'),
        iconProps: {
          iconName: 'Edit'
        }
      }
    ];
  };

   getFarItems() {
    return [
      {
        key: 'sort',
        name: 'Sort',
        iconProps: {
          iconName: 'SortLines'
        },
        onClick: () => console.log('Sort')
      },
      {
        key: 'tile',
        name: 'Grid view',
        iconProps: {
          iconName: 'Tiles'
        },
        iconOnly: true,
        onClick: () => console.log('Tiles')
      },
      {
        key: 'info',
        name: 'Info',
        iconProps: {
          iconName: 'Info'
        },
        iconOnly: true,
        onClick: () => console.log('Info')
      }
    ];
  };
>>>>>>> Added Components
}
