import { FabricComponent } from "./fabric-component";
import { ControlValueAccessor } from "@angular/forms";

/**
 * Represents an input component that can be used
 * to bind to ngModel directives
 */
export class FabricInputComponent extends FabricComponent
  implements ControlValueAccessor {
  /**
   * Holds a cached list of change observers
   */
  private _changeFnList: Array<any> = [];

  writeValue(obj: any): void {
    // call all change observers
    // now
    this._changeFnList.forEach(f => f(obj));
  }
  registerOnChange(fn: any): void {
    // cache the change observers for this
    // component
    this._changeFnList.push(fn);
  }
  registerOnTouched(fn: any): void {
    // nothing to do here for now
  }
  setDisabledState?(isDisabled: boolean): void {
    // disable this component
    this.disabled = isDisabled;
    this.render();
  }
}
