// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { ReactComponentType } from "@eswarpr/ng-react-proxy";
import { BaseButton } from "../base-button";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";

/**
 * Represents a button rendered using the DefaultButton style
 */
@Component({
  selector: "fabric-default-button",
  templateUrl: "../base-button-template.html",
  styles: [],
  providers: [HostDataProvider]
})
@ReactComponentType(DefaultButton)
export class DefaultButtonComponent extends BaseButton {}
