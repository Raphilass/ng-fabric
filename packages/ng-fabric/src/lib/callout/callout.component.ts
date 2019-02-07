import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HostDataProvider, ReactComponentType, ReactComponentProp } from '@eswarpr/ng-react-proxy';
import { Callout, IPoint } from 'office-ui-fabric-react';
import { FabricComponent } from '../fabric-component';

@Component({
  selector: 'fabric-callout',
  templateUrl: './callout.component.html',
  providers: [HostDataProvider]
})
@ReactComponentType(Callout)
export class CalloutComponent extends FabricComponent {

  constructor(private hostDataProvider: HostDataProvider) {
    super();
    this.hostDataProvider.setComponentHost(this);
  }

 
  @Input()
  @ReactComponentProp()
  className:string;

  @Input()
  @ReactComponentProp()
  ariaLabel:string;

  @Input()
  @ReactComponentProp()
  ariaLabelledBy:string;

  @Input()
  @ReactComponentProp()
  ariaDescribedBy:string;

  @Input()
  @ReactComponentProp()
  backgroundColor:string;

  @Input()
  @ReactComponentProp()
  role:string;

  @Input()
  @ReactComponentProp()
  gapSpace:number;

  @Input()
  @ReactComponentProp()
  target:Element | string | MouseEvent | IPoint | null;

  @Output()
  @ReactComponentProp()
  onDismiss: EventEmitter<any> = new EventEmitter();

  @Input()
  @ReactComponentProp()
  setInitialFocus:boolean;

  @Input()
  @ReactComponentProp()
  hidden:boolean;

  @Input()
  @ReactComponentProp()
  isBeakVisible:boolean;

  @Input()
  @ReactComponentProp()
  calloutMaxWidth:number
}

