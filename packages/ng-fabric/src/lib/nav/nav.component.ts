// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef
} from "@angular/core";
import { ReactComponentType, ReactComponentProp } from "@eswarpr/ng-react-proxy";
import { Nav, INavLinkGroup, INavLink } from "office-ui-fabric-react";
import { FabricComponent } from "../fabric-component";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";

@Component({
  selector: "fabric-nav",
  template: HOST_COMPONENT_TEMPLATE
})
@ReactComponentType(Nav)
export class NavComponent extends FabricComponent {
  /**
   * A collection of link groups to display in the navigation bar
   */
  @Input()
  @ReactComponentProp()
  groups: Array<INavLinkGroup> | null;
  /**
   * Used to customize how content inside the link tag is rendered
   * @defaultvalue Default link rendering
   */
  @Input()
  @ReactComponentProp()
  onRenderLink: TemplateRef<any>;
  /**
   * Used to customize how content inside the group header is rendered
   * @defaultvalue Default group header rendering
   */
  @Input()
  @ReactComponentProp()
  onRenderGroupHeader: TemplateRef<any>;
  /**
   * The meta 'key' property of the currently selected NavItem of the Nav. Can return
   * undefined if the currently selected nav item has no populated key property. Be aware
   * that in order for Nav to properly understand which key is selected all NavItems in
   * all groups of the Nav must have populated key properties.
   */
  @Input()
  @ReactComponentProp()
  selectedKey: string | undefined;
  /**
   * (Optional) The nav container aria label.
   */
  @Input()
  @ReactComponentProp()
  expandButtonAriaLabel: string;
  /**
   * (Optional) The key of the nav item initially selected.
   */
  @Input()
  @ReactComponentProp()
  initialSelectedKey: string;
  /**
   * Indicates whether the navigation component renders on top of other content in the UI
   */
  @Input()
  @ReactComponentProp()
  isOnTop: boolean;
  /**
   * Function callback invoked when a link in the navigation is clicked
   */
  @Output()
  @ReactComponentProp({
    name: "onLinkClick"
  })
  linkClick: EventEmitter<INavLink> = new EventEmitter();
  /**
   * Function callback invoked when the chevron on a link is clicked
   */
  @Output()
  @ReactComponentProp({
    name: "onLinkExpanded"
  })
  linkExpanded: EventEmitter<INavLink> = new EventEmitter();
}
