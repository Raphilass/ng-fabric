// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit } from "@angular/core";
import { CompoundButton } from "office-ui-fabric-react";
import { BaseButton } from "../base-button";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { ReactComponentType } from "@eswarpr/ng-react-proxy";

@Component({
  selector: "fabric-compound-button",
  templateUrl: "../base-button-template.html",
  styles: []
})
@ReactComponentType(CompoundButton)
export class CompoundButtonComponent extends BaseButton {}
