import {
  ReactComponentHost,
  ReactComponentProp
} from "./imports";
import { Output, Input, EventEmitter } from "@angular/core";
import {
  IButton,
  IButtonStyles,
  IButtonProps
} from "office-ui-fabric-react/lib/Button";
import { FabricComponent } from "./fabric-component";
import { ITheme } from "@uifabric/styling";
import { IIconProps } from "office-ui-fabric-react/lib/Icon";
import { IContextualMenuProps } from "office-ui-fabric-react/lib/ContextualMenu";
import { IRenderFunction, IComponentAs } from "@uifabric/utilities";

// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export abstract class BaseButton extends FabricComponent {
  /**
   * If provided, this component will be rendered as an anchor.
   * @defaultvalue ElementType.anchor
   */
  @Input()
  @ReactComponentProp()
  href: string;
  /**
   * Changes the visual presentation of the button to be emphasized (if defined)
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  primary: boolean;
  /**
   * Unique id to identify the item. Typically a duplicate of key value.
   */
  @Input()
  @ReactComponentProp()
  uniqueId: string | number;
  /**
   * Custom styling for individual elements within the button DOM.
   */
  @Input()
  @ReactComponentProp()
  styles: IButtonStyles;
  /**
   * Theme provided by HOC.
   */
  @Input()
  @ReactComponentProp()
  theme: ITheme;
  /**
   * Whether the button is checked
   */
  @Input()
  @ReactComponentProp()
  checked: boolean;
  /**
   * Whether button is a toggle button with distinct on and off states. This should be true for buttons that permanently
   * change state when a press event finishes, such as a volume mute button.
   */
  @Input()
  @ReactComponentProp()
  toggle: boolean;
  /**
   * Text to render button label. If text is supplied, it will override any string in button children.
   * Other children components will be passed through after the text.
   */
  @Input()
  @ReactComponentProp()
  text: string;
  /**
   * The props for the icon shown in the button.
   */
  @Input()
  @ReactComponentProp()
  iconProps: IIconProps;
  /**
   * Props for button menu. Providing this will default to showing the menu icon. See menuIconProps for overriding
   * how the default icon looks. Providing this in addition of onClick and setting the split property to true will render a SplitButton.
   */
  @Input()
  @ReactComponentProp()
  menuProps: IContextualMenuProps;
  /**
   * Whether the button can have focus in disabled mode
   */
  @Input()
  @ReactComponentProp()
  allowDisabledFocus: boolean;
  /**
   * If set to true and if this is a splitButton (split == true) then the primary action of a split button is disabled.
   */
  @Input()
  @ReactComponentProp()
  primaryDisabled: boolean;
  /**
   * Callback that runs after Button's contextualmenu was closed (removed from the DOM)
   */
  @Output()
  @ReactComponentProp()
  onAfterMenuDismiss: EventEmitter<void> = new EventEmitter();

  /**
   * If set to true, and if menuProps and onClick are provided, the button will render as a SplitButton. Defaults to false.
   */
  @Input()
  @ReactComponentProp()
  split: boolean;

  /**
   * The props for the icon shown when providing a menu dropdown.
   */
  @Input()
  @ReactComponentProp()
  menuIconProps: IIconProps;

  /**
   * Accessible label for the dropdown chevron button if this button is split.
   */
  @Input()
  @ReactComponentProp()
  splitButtonAriaLabel: string;

  /**
   * Optional callback when menu is clicked.
   */
  @Output()
  @ReactComponentProp()
  onMenuClick: EventEmitter<any> = new EventEmitter();

  /**
   * Description of the action this button takes.
   * Only used for compound buttons
   */
  @Input()
  @ReactComponentProp()
  secondaryText: string;

  /**
   * Any custom data the developer wishes to associate with the menu item.
   */
  @Input()
  @ReactComponentProp()
  data: any;

  /**
   * Optional callback when button is clicked.
   */
  @Output()
  @ReactComponentProp()
  onClick: EventEmitter<any> = new EventEmitter();
}
