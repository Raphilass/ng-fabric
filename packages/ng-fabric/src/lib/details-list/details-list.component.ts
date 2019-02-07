import { Component, Input, EventEmitter, Output } from "@angular/core";
import { ReactComponentType, HostDataProvider } from "@eswarpr/ng-react-proxy";
import {
  DetailsList,
  IColumn,
  DetailsListLayoutMode,
  ISelection
} from "office-ui-fabric-react";
import { FabricComponent } from "../fabric-component";
import { ReactComponentProp } from "@eswarpr/ng-react-proxy";
import { IComponentEvent } from "@eswarpr/ng-react-proxy/src/component-event";

@Component({
  selector: "fabric-details-list",
  templateUrl: "./details-list.component.html",
  providers: [HostDataProvider]
})
@ReactComponentType(DetailsList)
export class DetailsListComponent extends FabricComponent {
  @Input()
  @ReactComponentProp()
  items: any[];

  @Input()
  @ReactComponentProp()
  columns: IColumn[];

  @Input()
  @ReactComponentProp()
  setKey: string;

  @Input()
  @ReactComponentProp()
  layoutMode: DetailsListLayoutMode;

  @Input()
  @ReactComponentProp()
  selection: ISelection;

  @Input()
  @ReactComponentProp()
  selectionPreservedOnEmptyClick: boolean;

  @Input()
  @ReactComponentProp()
  ariaLabelForSelectionColumn: string;

  @Input()
  @ReactComponentProp()
  ariaLabelForSelectAllCheckbox: string;

  @Output()
  @ReactComponentProp({
    name: "onItemInvoked"
  })
  itemInvoked: EventEmitter<IComponentEvent> = new EventEmitter();

  @Output()
  @ReactComponentProp({
    name: "onActiveItemChanged"
  })
  activeItemChanged: EventEmitter<IComponentEvent> = new EventEmitter();

  @Input()
  @ReactComponentProp()
  selectionMode: SelectionMode;
}
