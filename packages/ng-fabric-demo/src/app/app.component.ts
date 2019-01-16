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
  IDatePickerStrings,
  IDialogContentProps,
  DialogType
} from "office-ui-fabric-react";
import { IComponentEvent } from "@eswarpr/ng-react-proxy/src/component-event";
import { NormalPeoplePickerComponent } from "packages/ng-fabric/src/lib/normal-people-picker/normal-people-picker.component";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
import { people } from "./PickerExampleData";
import { IComboBoxOptionClassNames } from "office-ui-fabric-react/lib/components/ComboBox/ComboBox.classNames";
import { NgForm } from "@angular/forms";
// import { TextFieldComponent } from "../../../ng-fabric/src/lib/text-field/text-field.component";
import { number } from "prop-types";

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

  /* modal */

_showModal:boolean = false;
private closeModal(){
  console.log("modal close");
  this._showModal = true;
}
dialogContentPros:IDialogContentProps = {
  type:DialogType.normal,
  title:"Modal",
  subText:"Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails."
}

showDialog(){
  this._showModal = true;
}
  /** ************ */

_lower:number = 0;
_datePicked:Date;
_name:string;

DropDown1:string[];
DropDown2:string;

_handleSetDropdown(){
  this.DropDown1 = ["monday","tuesday"]
}

_handleSetDropdownSingle(){
  this.DropDown2 = "monday";
}

  _handleSubmitForm(f:NgForm){
    console.log("changing text");
    this._name = "I have changed"
  }

  // @ViewChild("txtbox")
  // private _txtBox:TextFieldComponent

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

  private _dropDownOptions:IDropdownOption[] = [{
    key:"monday",
    text:"Monday"
  },{
    key:"tuesday",
    text:"Tuesday"
  },{
    key:"wednesday",
    text:"Wednesday"
  },{
    key:"thursday",
    text:"Thursday"
  },{
    key:"friday",
    text:"Friday"
  }]


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

  _buttonClick = () => this._text = "Changed";
  _refreshCount = 0;

  _panelOpen = false;

  _openPanel()  {
    this._refreshCount++;
    this._panelOpen = true;
  }

  // _buttonClick = () => alert("Hello World");
  
  _panelDismissed = () => this._panelOpen = false;
}
