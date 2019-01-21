import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { FabricInputComponent } from "../fabric-input-component";
import {
  ReactComponentType,
  ReactComponentProp,
  HostDataProvider
} from "@eswarpr/ng-react-proxy";
import { Checkbox, IIconProps, IKeytipProps } from "office-ui-fabric-react";
import { IComponentEvent } from "@eswarpr/ng-react-proxy";

/**
 * Represents a checkbox control
 */
@Component({
  selector: "fabric-checkbox",
  templateUrl: "./check-box.component.html",
  styles: [],
  providers: [HostDataProvider]
})
@ReactComponentType(Checkbox)
export class CheckboxComponent extends FabricInputComponent {
  /**
   * Checked state. Mutually exclusive to "defaultChecked". Use this if you control the checked state at a higher
   * level and plan to pass in the correct value based on handling onChange events and re-rendering.
   */
  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  checked: boolean;
  /**
   * Default checked state. Mutually exclusive to "checked". Use this if you want an uncontrolled component, and
   * want the Checkbox instance to maintain its own state.
   */
  @Input()
  @ReactComponentProp()
  defaultChecked: boolean;
  /**
   * Label to display next to the checkbox.
   */
  @Input()
  @ReactComponentProp()
  label: string;
  /**
   * Event when the checkbox value is changed
   */
  @Output()
  change: EventEmitter<IComponentEvent> = new EventEmitter();

  /**
   * Optional input props that will be mixed into the input element, *before* other props are applied. This allows
   * you to extend the input element with additional attributes, such as data-automation-id needed for automation.
   * Note that if you provide, for example, "disabled" as well as "inputProps.disabled", the former will take
   * precedence over the later.
   */
  @Input()
  @ReactComponentProp()
  inputProps: React.ButtonHTMLAttributes<HTMLElement | HTMLButtonElement>;
  /**
   * Allows you to set the checkbox to be at the before (start) or after (end) the label.
   * @defaultvalue 'start'
   */
  @Input()
  @ReactComponentProp()
  boxSide: "start" | "end";
  /**
   * Custom icon props for the check mark rendered by the checkbox
   */
  @Input()
  @ReactComponentProp()
  checkmarkIconProps: IIconProps;
  /**
   * Optional keytip for this checkbox
   */
  @Input()
  @ReactComponentProp()
  keytipProps: IKeytipProps;
  /**
   * Callback that is called when the checked value has changed.
   */
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  onChange = (
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    checked?: boolean
  ) => {
    this.onViewValueChanged(checked);
    if (this.change) {
      this.change.emit({
        arguments: [checked]
      });
    }
  };

  onModelValueChanged = val => (this.checked = val);
}
