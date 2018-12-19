// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { ReactComponentType } from "../../lib/imports";
import { BaseButton } from "../base-button";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";

/**
 * Represents a button rendered using the DefaultButton style
 */
@Component({
  selector: "fabric-default-button",
  template: HOST_COMPONENT_TEMPLATE,
  styles: []
})
@ReactComponentType(DefaultButton)
export class DefaultButtonComponent extends BaseButton {}
