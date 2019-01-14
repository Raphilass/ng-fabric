import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from "@angular/core";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import {
  ReactComponentType,
  ReactComponentProp,
  IComponentPropSettings
} from "@eswarpr/ng-react-proxy";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { IComponentEvent } from "@eswarpr/ng-react-proxy";
import { FabricInputComponent } from "../fabric-input-component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { IKeytipProps, ITheme } from "office-ui-fabric-react";

/**
 * Represents a dropdown component
 */
@Component({
  selector: "fabric-dropdown",
  templateUrl: "./dropdown.component.html",
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DropdownComponent
    }
  ]
})
@ReactComponentType(Dropdown)
export class DropdownComponent extends FabricInputComponent {
  @Input()
  @ReactComponentProp()
  options: Array<IDropdownOption>;

  @Output()
  focus: EventEmitter<IComponentEvent> = new EventEmitter();

  @Input()
  @ReactComponentProp()
  defaultSelectedKeys: string[] | number[];

  @Input()
  @ReactComponentProp()
  label: string;

  @Input()
  @ReactComponentProp()
  dropdownWidth: number;

  @Input()
  @ReactComponentProp()
  keytipProps: IKeytipProps;

  @Input()
  @ReactComponentProp()
  multiSelect: boolean;

  @Input()
  @ReactComponentProp()
  multiSelectDelimiter = ",";

  @Input()
  @ReactComponentProp()
  notifyOnReselect: boolean;

  @Input()
  @ReactComponentProp()
  responsiveMode: boolean;

  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  selectedKeys: string[] | number[];

  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  selectedKey: string | number;

  /**
   * When the input value changes.
   */
  @Output()
  change: EventEmitter<IComponentEvent> = new EventEmitter();

  /**
   * Callback for when the input value changes.
   */
  @ReactComponentProp()
  private onChange = (event, newValue: IDropdownOption) => {
    // check if it is multi-select option
    // if so, we will need to set the selected
    // keys first and then add to the options
    let _viewValue: IDropdownOption[] | IDropdownOption;
    if (this.multiSelect) {
      // did we remove the option
      const _clonedArray = this.selectedKeys ? this.selectedKeys.slice() : [];
      if (!newValue.selected) {
        // remove the option from the list of selected keys
        this.selectedKeys = (_clonedArray as Array<any>).filter(
          item => item !== newValue.key
        );
      } else {
        // add it as a new option to the list of selected keys
        (_clonedArray as Array<any>).push(newValue.key);
        this.selectedKeys = _clonedArray;
      }
      this.options
        .filter(x => x.key === newValue.key)
        .forEach(x => (x.selected = newValue.selected));
      _viewValue = this.options.filter(x => x.selected);
    } else {
      _viewValue = newValue;
    }

    this.onViewValueChanged(_viewValue);
    if (this.change) {
      this.change.emit({
        arguments: [_viewValue]
      });
    }
  }

  onModelValueChanged = (val: IDropdownOption | IDropdownOption[]) => {
    if (this.multiSelect) {
      // ensure the provided value is an array
      if (val && typeof val === "object") {
        const _items = val as IDropdownOption[];
        const _keys = [];
        _items.forEach(x =>
          this.options
            .filter(y => y.key === x.key)
            .forEach(y => (y.selected = true))
        );
        this.options.filter(x => x.selected).forEach(item => _keys.push(item.key));
        this.selectedKeys = _keys;
      }
    } else {
      this.selectedKey = val as any;
    }
  }

  onModelValueChanged = (val: any) => {
    this.value = val;
  }

}
