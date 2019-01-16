// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit } from "@angular/core";
import { BaseButton } from "../base-button";
import { ReactComponentType } from "../../lib/imports";
import { IconButton } from "office-ui-fabric-react";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";

@Component({
  selector: "fabric-icon-button",
  template: HOST_COMPONENT_TEMPLATE,
  providers: [HostDataProvider]
})
@ReactComponentType(IconButton)
export class IconButtonComponent extends BaseButton {}
