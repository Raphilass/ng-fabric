// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit } from "@angular/core";
import { ReactComponentType } from "../../lib/imports";
import { CompoundButton } from "office-ui-fabric-react";
import { BaseButton } from "../base-button";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";

@Component({
  selector: "fabric-compound-button",
  template: HOST_COMPONENT_TEMPLATE,
  styles: []
})
@ReactComponentType(CompoundButton)
export class CompoundButtonComponent extends BaseButton {}
