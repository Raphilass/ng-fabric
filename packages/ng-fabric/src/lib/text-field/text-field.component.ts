// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {
  ReactComponentProp,
  ReactComponentType,
  HostDataProvider
} from "@eswarpr/ng-react-proxy";
import {
  TextField,
  IRenderFunction,
  ITextFieldProps,
  IIconProps
} from "office-ui-fabric-react";
import { FabricInputComponent } from "../fabric-input-component";
import { IComponentEvent } from "@eswarpr/ng-react-proxy/src/component-event";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";

/**
 * Represents a text input field in UI Fabric
 */
@Component({
  selector: "fabric-text-field",
  templateUrl: "./text-field.component.html",
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextFieldComponent
    },
    HostDataProvider
  ]
})
@ReactComponentType(TextField)
export class TextFieldComponent extends FabricInputComponent {
  /**
   * Whether or not the text field is a multiline text field.:
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  multiline: boolean;
  /**
   * Whether or not the multiline text field is resizable.
   * @defaultvalue true
   */
  @Input()
  @ReactComponentProp()
  resizable: boolean;
  /**
   * Whether or not to auto adjust text field height. Applies only to multiline text field.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  autoAdjustHeight: boolean;
  /**
   * Whether or not the text field is underlined.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  underlined: boolean;
  /**
   * Whether or not the text field is borderless.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  borderless: boolean;
  /**
   * Label displayed above the text field (and read by screen readers).
   */
  @Input()
  @ReactComponentProp()
  label: string;
  /**
   * Description displayed below the text field to provide additional details about what text to enter.
   */
  @Input()
  @ReactComponentProp()
  description: string;
  /**
   * Prefix displayed before the text field contents. This is not included in the value.
   */
  @Input()
  @ReactComponentProp()
  prefix: string;
  /**
   * Suffix displayed after the text field contents. This is not included in the value.
   */
  @Input()
  @ReactComponentProp()
  suffix: string;
  /**
   * Props for an optional icon, displayed in the far right end of the text field.
   */
  @Input()
  @ReactComponentProp()
  iconProps: IIconProps;
  /**
   * Default value of the text field. Only provide this if the text field is an uncontrolled component;
   * otherwise, use the `value` property.
   */
  @Input()
  @ReactComponentProp()
  defaultValue: string;
  /**
   * Current value of the text field. Only provide this if the text field is a controlled component where you
   * are maintaining its current state; otherwise, use the `defaultValue` property.
   */
  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  value: string;
  /**
   * If true, the text field is readonly.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  readOnly: boolean;
  /**
   * Static error message displayed below the text field. Use `onGetErrorMessage` to dynamically
   * change the error message displayed (if any) based on the current value.
   */
  @Input()
  @ReactComponentProp()
  errorMessage: string;
  /**
   * When the input value changes.
   */
  @Output()
  change: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * Called after the input's value updates but before re-rendering.
   * @param newValue - The new value. Type should be string.
   */
  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  onBeforeChange: (newValue: any) => void;
  /**
   * Function used to determine whether the input value is valid and get an error message if not.
   *
   *   When it returns string:
   *   - If valid, it returns empty string.
   *   - If invalid, it returns the error message string and the text field will
   *     show a red border and show an error message below the text field.
   *
   *   When it returns Promise<string>:
   *   - The resolved value is display as error message.
   *   - The rejected, the value is thrown away.
   *
   */
  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  onGetErrorMessage: (
    value: string
  ) => string | PromiseLike<string> | undefined;
  /**
   * Whether the input field should have autocomplete enabled.
   * This tells the browser to display options based on earlier typed values.
   */
  @Input()
  @ReactComponentProp()
  autoComplete: "on" | "off";
  /**
   * The masking string that defines the mask's behavior.
   * A backslash will escape any character.
   * Special format characters are:
   * '9': [0-9]
   * 'a': [a-zA-Z]
   * '*': [a-zA-Z0-9]
   *
   * @example `Phone Number: (999) 999-9999`
   */
  @Input()
  @ReactComponentProp()
  mask: string;
  /**
   * The character to show in place of unfilled characters of the mask.
   * @defaultvalue '_'
   */
  @Input()
  @ReactComponentProp()
  maskChar: string;
  /**
   * An object defining the format characters and corresponding regexp values.
   * Default format characters: \{
   *  '9': /[0-9]/,
   *  'a': /[a-zA-Z]/,
   *  '*': /[a-zA-Z0-9]/
   * \}
   */
  @Input()
  @ReactComponentProp()
  maskFormat: {
    [key: string]: RegExp;
  };

  /**
   * Callback for when the input value changes.
   */
  @ReactComponentProp()
  private onChange = (event, newValue) => {
    // call writevalue to allow for ngModel
    // updates
    this.onViewValueChanged(newValue);
    this.writeValue(newValue);
    if (this.change) {
      this.change.emit({
        arguments: [newValue]
      });
    }
  }

  onModelValueChanged = (val: any) => {
    this.value = val;
  }

  /**
   * Initializes a new instance of the TextFieldComponent
   */
  constructor(private hostDataProvider: HostDataProvider) {
    super();
    this.hostDataProvider.setComponentHost(this);
  }
}
