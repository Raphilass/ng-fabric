import { Component } from "@angular/core";
import {
  IChoiceGroupOption,
  IDropdownOption,
  IPersonaSharedProps
} from "office-ui-fabric-react";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  _filterResults(){
    
  }

  private _options: IChoiceGroupOption[] = [
    {
      key: "NA",
      text: "N/A"
    }, {
      key: "No",
      text: "No"
    }, {
      key: "Yes",
      text: "Yes"
    }, {
      key: "FF",
      text: "FF"
    }
  ]
  private _results:Array<string> = ["Yes", "No","No","FF"]
  
  private res:string;

  _handleChoiceGroupChange(args:any) {
    console.log("res", this.res);
  }

  private _dropDownOptions: IDropdownOption[] = [{
    key: "monday",
    text: "Monday"
  }, {
    key: "tuesday",
    text: "Tuesday"
  }, {
    key: "wednesday",
    text: "Wednesday"
  }, {
    key: "thursday",
    text: "Thursday"
  }, {
    key: "friday",
    text: "Friday"
  }]

  _handleDropdownChange(args:any) {
    // console.log("ev", ev);
    console.log("ddl args", args);
  }
}
