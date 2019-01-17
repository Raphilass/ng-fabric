// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit } from "@angular/core";
import { BaseButton } from "../base-button";
import { ReactComponentType } from "@eswarpr/ng-react-proxy";
import { PrimaryButton } from "office-ui-fabric-react";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";

/**
 * Represents a button rendered using the PrimaryButton style
 */
@Component({
  selector: "fabric-primary-button",
  templateUrl: "../base-button-template.html",
  providers: [HostDataProvider]
})
@ReactComponentType(PrimaryButton)
export class PrimaryButtonComponent extends BaseButton {}
