// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { FabricInputComponent } from "../fabric-input-component";
import {
  ReactComponentType,
  ReactComponentProp,
  IComponentEvent
} from "@eswarpr/ng-react-proxy";
import {
  ComboBox,
  IComboBoxOption,
  IComboBox,
  IIconProps,
  IKeytipProps,
  IButtonStyles,
  IComboBoxOptionStyles
} from "office-ui-fabric-react";

/**
 * Represents a Fabric UI combobox component
 */
@Component({
  selector: "fabric-combo-box",
  template: HOST_COMPONENT_TEMPLATE,
  styles: []
})
@ReactComponentType(ComboBox)
export class ComboBoxComponent extends FabricInputComponent {
  /**
   * Collection of options for this ComboBox
   */
  @Input()
  @ReactComponentProp()
  options: Array<IComboBoxOption>;
  /**
   * Represents the "change" event emitted
   */
  @Output()
  change: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * Callback issued when a ComboBox item is clicked.
   */
  @Output()
  @ReactComponentProp({
    name: "onItemClick"
  })
  itemClick: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * Callback issued when the user changes the pending value in ComboBox
   */
  @Output()
  @ReactComponentProp({
    name: "onPendingValueChanged"
  })
  pendingValueChanged: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * Function that gets invoked when the ComboBox menu is launched
   */
  @Output()
  @ReactComponentProp({
    name: "onMenuOpen"
  })
  menuOpen: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * Function that gets invoked when the ComboBox menu is dismissed
   */
  @Output()
  @ReactComponentProp({
    name: "onMenuDismissed"
  })
  menuDismissed: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * Whether the ComboBox is free form, meaning that the user input is not bound to provided options. Defaults to false.
   */
  @Input()
  @ReactComponentProp()
  allowFreeform: boolean;
  /**
   * Callback issued when the ComboBox requests the list to scroll to a specific element
   */
  @Output()
  @ReactComponentProp({
    name: "onScrollToItem"
  })
  scrollToItem: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * Whether the ComboBox auto completes. As the user is inputing text, it will be suggested potential matches from the list of options. If
   * the combo box is expanded, this will also scroll to the suggested option, and give it a selected style.
   *
   * @defaultvalue "on"
   */
  @Input()
  @ReactComponentProp()
  autoComplete: "on" | "off";
  /**
   * Value to show in the input, does not have to map to a combobox option
   */
  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  text: string;
  /**
   * The IconProps to use for the button aspect of the combobox
   */
  @Input()
  @ReactComponentProp()
  buttonIconProps: IIconProps;
  /**
   * Callback issued when the options should be resolved, if they have been updated or
   * if they need to be passed in the first time
   */
  @Output()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  onResolveOptions: (
    options: IComboBoxOption[]
  ) => IComboBoxOption[] | PromiseLike<IComboBoxOption[]>;
  /**
   * Custom width for dropdown (unless useComboBoxAsMenuWidth is undefined or false)
   */
  @Input()
  @ReactComponentProp()
  dropdownWidth: number;
  /**
   * Whether to use the ComboBoxes width as the menu's width
   */
  @Input()
  @ReactComponentProp()
  useComboBoxAsMenuWidth: boolean;
  /**
   * Custom max width for dropdown
   */
  @Input()
  @ReactComponentProp()
  dropdownMaxWidth: number;
  /**
   * Optional mode indicates if multi-choice selections is allowed.  Default to false
   */
  @Input()
  @ReactComponentProp()
  multiSelect: boolean;
  /**
   * Sets the 'aria-hidden' attribute on the ComboBox's button element instructing screen readers how to handle the element.
   * This element is hidden by default because all functionality is handled by the input element and the arrow button is
   * only meant to be decorative.
   * @defaultvalue true
   */
  @Input()
  @ReactComponentProp()
  isButtonAriaHidden: boolean;
  /**
   * Optional keytip for this combo box
   */
  @Input()
  @ReactComponentProp()
  keytipProps: IKeytipProps;
  /**
   * Styles for the caret down button.
   */
  @Input()
  @ReactComponentProp()
  caretDownButtonStyles: IButtonStyles;
  /**
   * Default styles that should be applied to ComboBox options,
   * in case an option does not come with user-defined custom styles
   */
  @Input()
  @ReactComponentProp()
  comboBoxOptionStyles: IComboBoxOptionStyles;
  /**
   * When options are scrollable the selected option is positioned at the top of the callout when it is opened
   * (unless it has reached the end of the scrollbar).
   * @defaultvalue false;
   */
  scrollSelectedToTop?: boolean;
  /**
   * Callback issued when either:
   * 1) the selected option changes
   * 2) a manually edited value is submitted. In this case there may not be a matched option if allowFreeform is also true
   * (and hence only value would be true, the other parameter would be null in this case)
   */
  @ReactComponentProp()
  onChange = (
    event: React.FormEvent<IComboBox>,
    option?: IComboBoxOption,
    index?: number,
    value?: string
  ) => {
    this.onModelValueChanged(option);
    if (this.change) {
      this.change.emit({
        arguments: [option]
      });
    }
  };
  onModelValueChanged = (val) => this.text = val;
}
