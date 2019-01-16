import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { HOST_COMPONENT_TEMPLATE } from '../host-component-template';
import { ReactComponentType, ReactComponentProp, IComponentPropSettings } from '@eswarpr/ng-react-proxy';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown'
import { IComponentEvent } from '@eswarpr/ng-react-proxy/src/component-event';
import { FabricInputComponent } from '../fabric-input-component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IKeytipProps, ITheme } from 'office-ui-fabric-react';
import { object } from 'prop-types';

@Component({
  selector: 'fabric-dropdown',
  template: HOST_COMPONENT_TEMPLATE,
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
  /**
 * Initializes a new instance of the TextFieldComponent
 */
  constructor() {
    super();
  }

  @Input()
  @ReactComponentProp()
  options: Array<IDropdownOption>;

  @Output()
  focus: EventEmitter<IComponentEvent> = new EventEmitter();

  // @Output()
  // @ReactComponentProp({name:"onChange"})
  // change:EventEmitter<IComponentEvent> = new EventEmitter();

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
  multiSelectDelimiter: string = ",";

  @Input()
  @ReactComponentProp()
  notifyOnReselect: boolean;


  /**
* When the input value changes.
*/
  @Output()
  onSelect: EventEmitter<IComponentEvent> = new EventEmitter();

  @Input()
  @ReactComponentProp()
  responsiveMode: boolean;

  @Input()
  @ReactComponentProp()
  theme: ITheme;


  /**
    * Current value of the text field. Only provide this if the text field is a controlled component where you
    * are maintaining its current state; otherwise, use the `defaultValue` property.
    */
  @Input()
  @ReactComponentProp()
  value: any;

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
  private onChange = (event, newValue) => {
    this.onViewValueChanged(newValue);


    if (this.multiSelect) {

      // taking out?
      if (!newValue.selected) {
        let keys: any = this.selectedKeys
        this.selectedKeys = keys.filter(x => x !== newValue.key);
      }
      else {
        const _clonedArray: any = this.selectedKeys ? this.selectedKeys.slice() : [];
        _clonedArray.push(newValue.key);
        this.selectedKeys = _clonedArray;
      }

      if (this.change) {
        this.change.emit({
          arguments: [this.selectedKeys]
        });
        this.onSelect.emit({
          arguments: [this.selectedKeys]
        });
      }

    } else {
      // single selection - selectedKey
      this.selectedKey = newValue.key

      if (this.change) {
        this.change.emit({
          arguments: [this.selectedKey]
        });
        this.onSelect.emit({
          arguments: [this.selectedKey]
        });
      }
    }




  }

  onModelValueChanged = (val: IDropdownOption | string | number | string[] | number[]) => {
    if (this.multiSelect) {
      this.selectedKeys = val as any;
    } else {
      this.selectedKey = val as any;
    }
  }

}
