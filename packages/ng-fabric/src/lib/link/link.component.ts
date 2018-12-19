// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit } from "@angular/core";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { ReactComponentHost } from "../../lib/imports";
import { FabricComponent } from "../fabric-component";
import { IKeytipProps } from "office-ui-fabric-react";

/**
 * A link is the lightest weight clickable control, and is often used to reduce the visual complexity of a design.
 */
@Component({
  selector: "fabric-link",
  template: HOST_COMPONENT_TEMPLATE,
  styles: []
})
export class LinkComponent extends FabricComponent {}
