import { FabricComponent } from "./fabric-component";
import { ControlValueAccessor } from "@angular/forms";

/**
 * Represents an input component that can be used
 * to bind to ngModel directives
 */
export abstract class FabricInputComponent extends FabricComponent
  implements ControlValueAccessor {
  /**
   * Holds a cached list of change observers
   */
  private _changeFnList: Array<any> = [];

  /**
   * When overridden in a derived class, the view should
   * be updated with the new value that was received
   * @param obj The new value from the model
   */
  protected abstract onModelValueChanged(obj: any): void;

  /**
   * Handles changes to the model value
   * @param obj 
   */
  writeValue(obj: any): void {
    // call all change observers
    // now
    if(this.onModelValueChanged) {
      this.onModelValueChanged(obj);
    }
  }

  /**
   * Called from specialised derived classes
   * when the value in the view has changed
   * @param obj The new value from the view
   */
  protected onViewValueChanged(obj: any) {
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
