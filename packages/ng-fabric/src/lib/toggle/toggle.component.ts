import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Toggle, IKeytipProps, ITheme } from 'office-ui-fabric-react';
import { ReactComponentType, ReactComponentProp, IComponentEvent, HostDataProvider } from '@eswarpr/ng-react-proxy';
import { FabricInputComponent } from '../fabric-input-component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fabric-toggle',
  templateUrl: './toggle.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ToggleComponent
    },HostDataProvider]
})
@ReactComponentType(Toggle)
export class ToggleComponent extends FabricInputComponent {

  constructor() { 
    super()
  }

  // defaultChecked={true}
  // label="Enabled and checked"
  // onText="On"
  // offText="Off"
  // onFocus={() => console.log('onFocus called')}
  // onBlur={() => console.log('onBlur called')}
  // onChange={this._onChange}

  @Output()
  @ReactComponentProp()
  focus:EventEmitter<void>= new EventEmitter();

  @Input()
  @ReactComponentProp()
  ariaLabel:string;

  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  checked:boolean;

  @Input()
  @ReactComponentProp()
  defaultChecked:boolean;

  @Input()
  @ReactComponentProp()
  disabled:boolean;

  @Input()
  @ReactComponentProp()
  inlineLabel:boolean;

  @Input()
  @ReactComponentProp()
  keytipProps:IKeytipProps;
  
  @Input()
  @ReactComponentProp()
  label:string;

  @Input()
  @ReactComponentProp()
  offText:string;
  @Input()

  @ReactComponentProp()
  onText:string;

  @Input()
  @ReactComponentProp()
  theme:ITheme;

    /**
   * When the input value changes.
   */
  @Output()
  change: EventEmitter<IComponentEvent> = new EventEmitter();


    /**
   * Callback for when the input value changes.
   */
  @ReactComponentProp()
  onChange = (
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    checked?: boolean
  ) => {   
    // set the checked value
    this.onViewValueChanged(checked);  
    if (this.change) {
      this.change.emit({
        arguments: [checked]
      });
    }
  };

  onModelValueChanged = (val: any) => {    
      this.checked = val;  
      this.checked = undefined;  
  }

}
