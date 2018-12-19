// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { FabricComponent } from "../fabric-component";
import {
  NormalPeoplePicker,
  IPersonaProps,
  IInputProps,
  ICalloutProps
} from "office-ui-fabric-react";
import { BasePeoplePickerComponent } from "../base-people-picker";
import { ReactComponentProp, ReactComponentType } from "../../lib/imports";
import { IComponentEvent } from "../../lib/imports";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/**
 * PeoplePickers are used to pick recipients.
 */
@Component({
  selector: "fabric-normal-people-picker",
  template: HOST_COMPONENT_TEMPLATE,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NormalPeoplePickerComponent,
      multi: true
    }
  ]
})
@ReactComponentType(NormalPeoplePicker)
export class NormalPeoplePickerComponent extends BasePeoplePickerComponent {}
