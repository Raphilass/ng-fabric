// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit } from "@angular/core";
import { BaseButton } from "../base-button";
import { ReactComponentType } from "../../lib/imports";
import { CommandBarButton } from "office-ui-fabric-react";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";

@Component({
  selector: "fabric-command-bar-button",
  template: HOST_COMPONENT_TEMPLATE
})
@ReactComponentType(CommandBarButton)
export class CommandBarButtonComponent extends BaseButton {}
