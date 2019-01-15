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
  ViewChild,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { FabricComponent } from "../fabric-component";
import { ReactComponentType, ReactComponentProp } from "../../lib/imports";
import {
  Panel,
  PanelType,
  IFocusTrapZoneProps,
  ILayerProps
} from "office-ui-fabric-react";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";

@Component({
  selector: "fabric-panel",
  templateUrl: "./panel.component.html",
  providers: [HostDataProvider]
})
@ReactComponentType(Panel)
export class PanelComponent extends FabricComponent {
  /**
   * Specifies the container that will host the panel header
   */
  @ViewChild("panelHeader", {
    read: ViewContainerRef
  })
  private panelHeader: ViewContainerRef;

  /**
   * Specifies the container that will host the panel footer
   */
  @ViewChild("panelFooterContent", {
    read: ViewContainerRef
  })
  private panelFooterContent: ViewContainerRef;
  /**
   * Specifies the container that will host the panel footer
   */
  @ViewChild("panelFooter", {
    read: ViewContainerRef
  })
  private panelFooter: ViewContainerRef;

  /**
   * Specifies the container that will host the panel navigation
   */
  @ViewChild("panelNavigation", {
    read: ViewContainerRef
  })
  private panelNavigation: ViewContainerRef;
  /**
   * Initializes a new instance of the PanelComponent
   */
  constructor(private hostDataProvider: HostDataProvider) {
    super();
    this.hostDataProvider.setComponentHost(this);
  }
  /**
   * Header text for the Panel.
   * @defaultvalue ""
   */
  @Input()
  @ReactComponentProp()
  headerText: string;
  /**
   * Whether the panel is displayed.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  isOpen: boolean;
  /**
   * Has the close button visible.
   * @defaultvalue true
   */
  @Input()
  @ReactComponentProp()
  hasCloseButton: boolean;
  /**
   * A callback function for when the panel is closed, before the animation completes.
   * If the panel should NOT be dismissed based on some keyboard event, then simply call ev.preventDefault() on it
   */
  @Output()
  @ReactComponentProp({
    name: "onDismiss"
  })
  dismiss: EventEmitter<any> = new EventEmitter();
  /**
   * A callback function which is called after the Panel is dismissed and the animation is complete.
   */
  @Output()
  @ReactComponentProp({
    name: "onDismissed"
  })
  dismissed: EventEmitter<any> = new EventEmitter();
  /**
   * Optional custom function to handle clicks outside the panel in lightdismiss mode
   */
  @Output()
  @ReactComponentProp({
    name: "onLightDismissClick"
  })
  lightDismissClick: EventEmitter<any> = new EventEmitter();
  /**
   * Whether the panel uses a modal overlay or not
   * @defaultvalue true
   */
  @Input()
  @ReactComponentProp()
  isBlocking?: boolean;
  /**
   * Determines if content should stretch to fill available space putting footer at the bottom of the page
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  isFooterAtBottom: boolean;
  /**
   * Whether the panel is hidden on dismiss, instead of destroyed in the DOM.
   * Protects the contents from being destroyed when the panel is dismissed.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  isHiddenOnDismiss: boolean;
  /**
   * Type of the panel.
   * @defaultvalue PanelType.smallFixedRight
   */
  @Input()
  @ReactComponentProp()
  type: PanelType;
  /**
   * Whether the panel can be light dismissed.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  isLightDismiss: boolean;
  /**
   * Custom panel width, used only when type is set to PanelType.custom.
   */
  @Input()
  @ReactComponentProp()
  customWidth: string;
  /**
   * Aria label on close button
   */
  @Input()
  @ReactComponentProp()
  closeButtonAriaLabel: string;
  /**
   * Optional props to pass to the FocusTrapZone component to manage focus in the panel.
   */
  @Input()
  @ReactComponentProp()
  focusTrapZoneProps: IFocusTrapZoneProps;
  /**
   * Optional props to pass to the Layer component hosting the panel.
   */
  @Input()
  @ReactComponentProp()
  layerProps: ILayerProps;
}
