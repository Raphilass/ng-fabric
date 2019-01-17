// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { FabricComponent } from "../fabric-component";
import { ReactComponentProp, HostDataProvider } from "@eswarpr/ng-react-proxy";
import { IBreadcrumbItem, IBreadCrumbData, Breadcrumb } from "office-ui-fabric-react";
import { ReactComponentType } from "@eswarpr/ng-react-proxy";

/**
 * Breadcrumbs are typically placed, in horizontal form, under the masthead or navigation of an experience, above the primary content area.
 */
@Component({
  selector: "fabric-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styles: [],
  providers: [HostDataProvider]
})
@ReactComponentType(Breadcrumb)
export class BreadcrumbComponent extends FabricComponent {
  /**
   * Collection of breadcrumbs to render
   */
  @Input()
  @ReactComponentProp()
  items: Array<IBreadcrumbItem>;
  /**
   * The maximum number of breadcrumbs to display before coalescing.
   * If not specified, all breadcrumbs will be rendered.
   */
  @Input()
  @ReactComponentProp()
  maxDisplayedItems: number;
  /**
   * Optional name to use for aria label on overflow button.
   */
  @Input()
  @ReactComponentProp()
  overflowAriaLabel: string;
  /**
   * Optional index where overflow items will be collapsed. Defaults to 0.
   */
  @Input()
  @ReactComponentProp()
  overflowIndex: number;
  /**
   * Method to call when reducing the length of the breadcrumb.
   * Return undefined to never reduce breadcrumb length
   */
  @Output()
  @ReactComponentProp()
  onReduceData: EventEmitter<IBreadCrumbData> = new EventEmitter();
}
