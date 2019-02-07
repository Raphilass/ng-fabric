import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
import { INavLinkGroup, IPersonaSharedProps, RefObject, Callout, IDropdownProps, IDropdownOption, DayOfWeek, IDatePickerStrings } from "office-ui-fabric-react";
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import { people } from "./PickerExampleData";
import { NormalPeoplePickerComponent } from "packages/ng-fabric/src/lib/normal-people-picker/normal-people-picker.component";
import { of } from "rxjs";
import { filter } from "rxjs/operators";
import * as React from "react";
import { CalloutComponent } from "packages/ng-fabric/src/lib/callout/callout.component";


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

interface IStateRecord {
  id: number;
  name: string;
  capital: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {

    /**
  * Day of week of my forms component, initialises datepickers
  * with this day as first day of week
  */
 _dayOfWeek: DayOfWeek = DayOfWeek.Monday;

 private _endDate:Date = new Date('2019-02-19T00:00:00Z');

private Teams:any = [{key:"Team1"}, {key:"Team3"}];
  private _teamOptions:IDropdownOption[] = [{
    key:"Team1",
    text:"Team 1"
  },{
    key:"Team2",
    text:"Team 2"
  },{
    key:"Team3",
    text:"Team 3"
  },{
    key:"Team4",
    text:"Team 4"
  },{
    key:"Team5",
    text:"Team 5"
  }]
  private isCalloutVisible:boolean  = false;

  private _calloutDetails:any = {};

  private _onShowMenuClicked = (evt:MouseEvent): void => {
      this._callout.target = evt.toElement
      this._calloutDetails = {
        Title:"A Title",
        Description:"A Description"
      }
      this.isCalloutVisible = !this.isCalloutVisible
  };

  private _onCalloutDismiss = (): void => {

      this.isCalloutVisible =  false
  
  };

  private _toggle:boolean = true;

  private _handleToggleChange(args:any){
    console.log(args);
  }

  @ViewChild("calloutButton")
  private _menuButtonElement:ElementRef

  @ViewChild("callout")
  private _callout:CalloutComponent

  private _targetElement

  
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


  // _onEditClick(ev: IComponentEvent, _item: IStateRecord): void {
  //   console.log(_item);
  // }

  // _menuItemClick(ev: IComponentEvent): void {
  //   console.log(ev);
  // }

  // _clearPeoplePicker = () => this._selectedPeople = [];
  
  // constructor(private http: Http) {}

  // ngOnInit() {
  //   this._items = this.http
  //     .get("http://services.groupkt.com/state/get/IND/all")
  //     .pipe(
  //       map(response => response.json().RestResponse.result),
  //       map((results: Array<any>) =>
  //         results.map(state => {
  //           const _menu = Object.assign({}, this.MENU_TEMPLATE);
  //           _menu.items = _menu.items.slice().map(x => {
  //             const _newItem = Object.assign({}, x);
  //             _newItem.data = state;
  //             return _newItem;
  //           });

  //           const _record = {
  //             id: state.id,
  //             name: state.name,
  //             capital: state.capital,
  //             actionMenu: _menu
  //           } as IStateRecord;

  //           return _record;
  //         })
  //       )
  //     );
  // }

  /**
   * Handles the AfterViewInit event of this component
   */
  ngAfterViewInit() { 
    // this._targetElement = this._menuButtonElement.nativeElement;
  }

  _handleValueFormat(val:number):string{
      return `${val * 100}%`
  }

  
}
