// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit } from "@angular/core";
import { ActionButton } from "office-ui-fabric-react";
import { ReactComponentType } from "../../lib/imports";
import { BaseButton } from "../base-button";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";

@Component({
  selector: "fabric-action-button",
  template: HOST_COMPONENT_TEMPLATE
})
@ReactComponentType(ActionButton)
export class ActionButtonComponent extends BaseButton {}
