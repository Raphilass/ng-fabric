import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReactComponentType, ReactComponentProp, IComponentEvent, HostDataProvider } from '@eswarpr/ng-react-proxy';
import { Slider, ITheme } from 'office-ui-fabric-react';
import { FabricInputComponent } from '../fabric-input-component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fabric-slider',
  template: `<div #host></div>`,
  styleUrls: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SliderComponent
    },
    HostDataProvider
  ]
})
@ReactComponentType(Slider)
export class SliderComponent extends FabricInputComponent {

  ngOnInit() {
  }

  @Input()
  @ReactComponentProp()
  label:string;

  @Input()
  @ReactComponentProp()
  max:number;

  @Input()
  @ReactComponentProp()
  min:number;

  @Input()
  @ReactComponentProp()
  step:number;

  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  valueFormat:(value:number) => string;

  @Input()
  @ReactComponentProp()
  showValue:boolean;

  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  value:number;

  
  @Input()
  @ReactComponentProp()
  ariaLabel:string;

  @Output()
  @ReactComponentProp()
  ariaValueText:EventEmitter<string> = new EventEmitter();

  @Input()
  @ReactComponentProp()
  buttonProps:React.HTMLAttributes<HTMLButtonElement>;
  @Input()
  @ReactComponentProp()
  className:string;

  @Input()
  @ReactComponentProp()
  defaultValue:number;

  @Input()
  @ReactComponentProp()
  disabled:boolean;

  @Input()
  @ReactComponentProp()
  theme:ITheme;

  @Input()
  @ReactComponentProp()
  vertical:boolean;

  /**
   * When the input value changes.
   */
  @Output()
  change: EventEmitter<IComponentEvent> = new EventEmitter();
  
 /**
   * Callback for when the input value changes.
   */
  @ReactComponentProp()
  private onChange = (newValue:number) => {
    // call writevalue to allow for ngModel
    // updates
    // console.log(this);
    this.onViewValueChanged(newValue);
    if (this.change) {
      this.change.emit({
        arguments: [newValue]
      });
    }
  }

  onModelValueChanged = (val: any) => {
    if(val){
      this.value = val;
    }
    
  }

  /**
   * Initializes a new instance of the TextFieldComponent
   */
  constructor(private hostDataProvider: HostDataProvider) {
    super();
    this.hostDataProvider.setComponentHost(this);
  }

}
