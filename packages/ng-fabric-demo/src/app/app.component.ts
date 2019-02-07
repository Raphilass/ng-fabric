import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import {
  INavLinkGroup,
  IPersonaSharedProps,
  IContextualMenuListProps,
  IContextualMenuProps
} from "office-ui-fabric-react";
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import { people } from "./PickerExampleData";
import { NormalPeoplePickerComponent } from "packages/ng-fabric/src/lib/normal-people-picker/normal-people-picker.component";
import { of, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { IComponentEvent } from "@eswarpr/ng-react-proxy/src/component-event";

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
export class AppComponent implements AfterViewInit, OnInit {
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

  _items: Observable<IStateRecord[]>;

  private MENU_TEMPLATE: IContextualMenuProps = {
    items: [
      {
        key: "edit",
        text: "Edit",
        iconProps: {
          iconName: "Edit"
        }
      }
    ]
  };

  /**
   * Specifies the list of people selected in the people picker
   */
  _selectedPeople: Array<IPersonaSharedProps>;

  _onEditClick(ev: IComponentEvent, _item: IStateRecord): void {
    console.log(_item);
  }

  _menuItemClick(ev: IComponentEvent): void {
    console.log(ev);
  }

  _clearPeoplePicker = () => this._selectedPeople = [];
  
  constructor(private http: Http) {}

  ngOnInit() {
    this._items = this.http
      .get("http://services.groupkt.com/state/get/IND/all")
      .pipe(
        map(response => response.json().RestResponse.result),
        map((results: Array<any>) =>
          results.map(state => {
            const _menu = Object.assign({}, this.MENU_TEMPLATE);
            _menu.items = _menu.items.slice().map(x => {
              const _newItem = Object.assign({}, x);
              _newItem.data = state;
              return _newItem;
            });

            const _record = {
              id: state.id,
              name: state.name,
              capital: state.capital,
              actionMenu: _menu
            } as IStateRecord;

            return _record;
          })
        )
      );
  }

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
