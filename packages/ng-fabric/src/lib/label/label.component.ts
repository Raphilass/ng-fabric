// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit, Input } from "@angular/core";
import { ReactComponentHost, ReactComponentType } from "@eswarpr/ng-react-proxy";
import { FabricComponent } from "../fabric-component";
import { Label } from "office-ui-fabric-react";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { ReactComponentProp } from "@eswarpr/ng-react-proxy";

/**
 * Labels give a name or title to a component or group of components. Labels should be in close proximity to the
 * component or group they are paired with. Some components, such as TextField, Dropdown, or Toggle, already have
 * Labels incorporated, but other components may optionally add a Label if it helps inform the user of the component’s purpose.
 */
@Component({
  selector: "fabric-label",
  template: HOST_COMPONENT_TEMPLATE,
  styles: []
})
@ReactComponentType(Label)
export class LabelComponent extends FabricComponent {
  /**
   * Initializes a new instance of the LabelComponent
   */
  constructor() {
    super();
    this.textContent = true;
  }

  /**
   * Whether the associated form field is required or not
   */
  @Input()
  @ReactComponentProp()
  required = false;
}
