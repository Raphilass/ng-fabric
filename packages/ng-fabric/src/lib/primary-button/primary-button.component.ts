// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit } from "@angular/core";
import { BaseButton } from "../base-button";
import { ReactComponentType } from "../../lib/imports";
import { PrimaryButton } from "office-ui-fabric-react";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";

/**
 * Represents a button rendered using the PrimaryButton style
 */
@Component({
  selector: "fabric-primary-button",
  template: HOST_COMPONENT_TEMPLATE
})
@ReactComponentType(PrimaryButton)
export class PrimaryButtonComponent extends BaseButton {}
