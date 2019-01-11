import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HOST_COMPONENT_TEMPLATE } from '../host-component-template';
import { ReactComponentType, ReactComponentProp } from '@eswarpr/ng-react-proxy';
import { SearchBox, IButtonProps, IIconProps, ITheme} from 'office-ui-fabric-react';
import { FabricInputComponent } from '../fabric-input-component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FabricComponent } from '../fabric-component';

@Component({
  selector: 'fabric-searchbox',
  template: `<div #host></div>`,
  styles: []
})
@ReactComponentType(SearchBox)
export class SearchboxComponent extends FabricInputComponent {

  constructor() {
    super();
  }
  
  @Input()
  @ReactComponentProp()
  hasFocus: boolean;
  
  @Output()
  @ReactComponentProp()
  onFocus: EventEmitter<void> = new EventEmitter();
  
  /**
   * The aria label of the button for the benefit of screen readers.
   */
  @Input()
  @ReactComponentProp()
  ariaLabel: string;
 
  @Input()
  @ReactComponentProp()
  className: string;

  @Input()
  @ReactComponentProp()
  clearButtonProps:IButtonProps;

  @Input()
  @ReactComponentProp()
  disableAnimation: boolean;

  @Input()
  @ReactComponentProp()
  iconProps: IIconProps;

  /**
   * Callback function for when the typed input for the SearchBox has changed.
   */
  @Output()
  @ReactComponentProp()
  onChange: EventEmitter<any> = new EventEmitter();

  /**
   * Callback executed when the user clears the search box by either clicking 'X' or hitting escape.
   */
  @Output()
  @ReactComponentProp()
  onClear: EventEmitter<any> = new EventEmitter();

  /**
   * Callback executed when the user presses escape in the search box.
   */
  @Output()
  @ReactComponentProp()
  onEscape: EventEmitter<any> = new EventEmitter();

  /**
   * Callback executed when the user presses enter in the search box.
   */
  @Output()
  @ReactComponentProp()
  onSearch: EventEmitter<any> = new EventEmitter();

  @Input()
  @ReactComponentProp()
  placeholder: string;

  @Input()
  @ReactComponentProp()
  theme:ITheme;

  /**
   * Whether or not the SearchBox is underlined.
   */
  @Input()
  @ReactComponentProp()
  underlined: boolean;

  /**
   * The value of the text in the SearchBox.
   */
  @Input()
  @ReactComponentProp()
  value: string;

}
