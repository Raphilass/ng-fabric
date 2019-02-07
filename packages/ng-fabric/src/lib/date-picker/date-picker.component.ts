import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  EventEmitter,
  Output
} from "@angular/core";
import {
  DatePicker,
  IDatePickerStrings,
  DayOfWeek,
  FirstWeekOfYear,
  ICalendarProps,
  ICalloutProps,
  IRefObject,
  IDatePicker,
  ICalendarFormatDateCallbacks,
  ITheme
} from "office-ui-fabric-react";
import {
  ReactComponentType,
  ReactComponentHost,
  ReactComponentProp,
  IComponentEvent
} from "@eswarpr/ng-react-proxy";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { FabricInputComponent } from "../fabric-input-component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

/**
 * The DatePicker component enables a user to pick a date value.
 */
@Component({
  selector: "fabric-date-picker",
  template: HOST_COMPONENT_TEMPLATE,
  styleUrls: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DatePickerComponent
    }
  ]
})
@ReactComponentType(DatePicker)
export class DatePickerComponent extends FabricInputComponent {
  /**
   * When the input value changes.
   */
  @Output()
  change: EventEmitter<IComponentEvent> = new EventEmitter();

  @Input()
  @ReactComponentProp()
  allFocusable: boolean;

  @Input()
  @ReactComponentProp()
  allowTextInput: boolean;

  @Input()
  @ReactComponentProp()
  ariaLabel: string;

  @Input()
  @ReactComponentProp()
  borderless: boolean;

  @Input()
  @ReactComponentProp()
  calendarProps: ICalendarProps;

  /**
   * Pass callout props to callout component
   */
  @Input()
  @ReactComponentProp()
  calloutProps: ICalloutProps;

  @Input()
  @ReactComponentProp()
  className: string;

  @Input()
  @ReactComponentProp()
  pickerAriaLabel: string;

  @Input()
  @ReactComponentProp()
  placeholder: string;

  @Input()
  @ReactComponentProp()
  showCloseButton: boolean;

  @Input()
  @ReactComponentProp()
  showGotToToday: boolean;

  @Input()
  @ReactComponentProp()
  showMonthPickerAsOverlay: boolean;

  @Input()
  @ReactComponentProp()
  showWeekNumbers: boolean;

  @Input()
  @ReactComponentProp()
  strings: IDatePickerStrings;

  @Input()
  @ReactComponentProp()
  today: Date;

  @Input()
  @ReactComponentProp()
  underlined: boolean;

  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  value: Date;

  @Input()
  @ReactComponentProp()
  dateTimeFormatter: ICalendarFormatDateCallbacks;

  @Input()
  @ReactComponentProp()
  disableAutoFocus: boolean;

  @Input()
  @ReactComponentProp()
  disabled: boolean;

  @Input()
  @ReactComponentProp()
  firstDayOfWeek: DayOfWeek;

  @Input()
  @ReactComponentProp()
  firstWeekOfYear: FirstWeekOfYear;

  @Input()
  @ReactComponentProp()
  highlightCurrentMonth: boolean;

  @Input()
  @ReactComponentProp()
  highlightSelectedMonth: boolean;

  @Input()
  @ReactComponentProp()
  initialPickerDate: Date;

  @Input()
  @ReactComponentProp()
  isMonthPickerVisible: boolean;

  @Input()
  @ReactComponentProp()
  isRequired: boolean;

  @Input()
  @ReactComponentProp()
  label: string;

  @Input()
  @ReactComponentProp()
  maxDate: Date;

  @Input()
  @ReactComponentProp()
  minDate: Date;

  @Output()
  @ReactComponentProp()
  onAfterMenuDismiss: EventEmitter<void> = new EventEmitter();

  /**
   * Callback for when the input value changes.
   */
  @ReactComponentProp()
  private onSelectDate = (newValue: React.FormEvent<Date>) => {
    // call writevalue to allow for ngModel
    // updates
    this.writeValue(newValue);
    this.onViewValueChanged(newValue);
    if (this.change) {
      this.change.emit({
        arguments: [newValue]
      });
    }
  };
  onModelValueChanged = val => (this.value = val);
}
