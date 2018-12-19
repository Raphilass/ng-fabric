// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { FabricComponent } from "../fabric-component";
import {
  ReactComponentType,
  ReactComponentProp,
  IComponentEvent
} from "@eswarpr/ng-react-proxy";
import { ChoiceGroup, IChoiceGroupOption } from "office-ui-fabric-react";
import { FabricInputComponent } from "../fabric-input-component";

/**
 * Represents a Choice group component
 */
@Component({
  selector: "fabric-choice-group",
  template: HOST_COMPONENT_TEMPLATE,
  styles: []
})
@ReactComponentType(ChoiceGroup)
export class ChoiceGroupComponent extends FabricInputComponent {
  /**
   * The options for the choice group.
   */
  @Input()
  @ReactComponentProp()
  options: IChoiceGroupOption[];
  /**
   * The key of the option that will be initially checked.
   */
  @Input()
  @ReactComponentProp()
  defaultSelectedKey: string | number;
  /**
   * The key of the selected option. If you provide this, you must maintain selection
   * state by observing onChange events and passing a new value in when changed.
   */
  @Input()
  @ReactComponentProp()
  selectedKey: string | number;
  /**
   * Descriptive label for the choice group.
   */
  @Input()
  @ReactComponentProp()
  label: string;
  /**
   * Change event
   */
  @Output()
  @ReactComponentProp()
  change: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * A callback for receiving a notification when the choice has been changed.
   */
  onChange = (
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    option?: IChoiceGroupOption
  ) => {
    this.writeValue(option);
    if (this.change) {
      this.change.emit({
        arguments: [option]
      });
    }
  };
}
