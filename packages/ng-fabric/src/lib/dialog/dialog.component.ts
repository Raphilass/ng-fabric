import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Dialog, IDialogContentProps, IModalProps, ITheme } from 'office-ui-fabric-react';
import { ReactComponentType, ReactComponentProp, HostDataProvider } from '../imports';
import { FabricComponent }  from "../fabric-component";  
import { ICSSRule, ICSSPixelUnitRule } from '@uifabric/merge-styles/lib/IRawStyleBase';

@Component({
  selector: 'fabric-dialog',
  templateUrl: "./dialog.component.html",
  providers: [HostDataProvider]
})
@ReactComponentType(Dialog)
export class DialogComponent  extends FabricComponent {

  constructor(private hostDataProvider: HostDataProvider) { 
    super();    
    this.hostDataProvider.setComponentHost(this);
  }

  ngOnInit() {
  }

  @Input()
  @ReactComponentProp()
  dialogContentProps:IDialogContentProps;

  @Input()
  @ReactComponentProp()
  hidden:boolean;

  @Input()
  @ReactComponentProp()
  maxWidth:ICSSRule | ICSSPixelUnitRule;

  @Input()
  @ReactComponentProp()
  minWidth:ICSSRule | ICSSPixelUnitRule;

  @Input()
  @ReactComponentProp()
  modalProps:IModalProps;

  @Output()
  @ReactComponentProp()
  onDismiss:EventEmitter<React.MouseEvent> = new EventEmitter()

  @Output()
  @ReactComponentProp()
  theme:ITheme;
}
