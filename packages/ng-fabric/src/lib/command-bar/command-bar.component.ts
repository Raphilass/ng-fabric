import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { FabricComponent } from "../fabric-component";
import { ReactComponentProp, ReactComponentType } from "../../lib/imports";
import { ICommandBarItemProps, ICommandBarData, IButtonProps, CommandBar } from "office-ui-fabric-react";

/**
 * CommandBar is a surface that houses commands that operate on the content of the window, panel,
 * or parent region it resides above. They are one of the most visible and recognizable ways to
 * surface commands, and can be an intuitive method for interacting with content on the page. However,
 * if overloaded or poorly organized, they can be difficult to use and hide valuable commands from your user.
 * CommandBars can also display a search box for finding content; hold simple commands as well as menus;
 * and display the status of ongoing actions.
 */
@Component({
  selector: "fabric-command-bar",
  template: HOST_COMPONENT_TEMPLATE,
  styles: []
})
@ReactComponentType(CommandBar)
export class CommandBarComponent extends FabricComponent {
  /**
   * Items to render. ICommandBarItemProps extend IContextualMenuItem
   */
  @Input()
  @ReactComponentProp()
  items: Array<ICommandBarItemProps>;
  /**
   * Items to render on the right side (or left, in RTL). ICommandBarItemProps extend IContextualMenuItem
   */
  @Input()
  @ReactComponentProp()
  farItems: Array<ICommandBarItemProps>;
  /**
   * Function callback invoked when data has been grown.
   */
  @Output()
  @ReactComponentProp()
  onDataGrown: EventEmitter<ICommandBarItemProps> = new EventEmitter();
  /**
   * Function callback invoked when data has been reduced.
   */
  @Output()
  @ReactComponentProp()
  onDataReduced: EventEmitter<ICommandBarItemProps> = new EventEmitter();
  /**
   * Custom function to grow data if items are too small for the given space.
   * Return undefined if no more steps can be taken to avoid infinate loop.
   */
  @Output()
  @ReactComponentProp()
  onGrowData: EventEmitter<ICommandBarData> = new EventEmitter();
  /**
   * Custom function to reduce data if items do not fit in given space. Return undefined
   * if no more steps can be taken to avoid infinate loop.
   */
  @Output()
  @ReactComponentProp()
  onReduceData: EventEmitter<ICommandBarData> = new EventEmitter();
  /**
   * Props to be passed to overflow button.
   * If menuProps are passed through this prop, any items provided will be prepended to the top of the existing menu.
   */
  @Input()
  @ReactComponentProp()
  overflowButtonProps: IButtonProps;
  /**
   * Default items to have in the overflow menu. ICommandBarItemProps extend IContextualMenuItem
   */
  @Input()
  @ReactComponentProp()
  overflowItems: Array<ICommandBarItemProps>;
  /**
   * When true, items will be 'shifted' off the front of the array when reduced, and unshifted during grow
   */
  @Input()
  @ReactComponentProp()
  shiftOnReduce: boolean;
}
