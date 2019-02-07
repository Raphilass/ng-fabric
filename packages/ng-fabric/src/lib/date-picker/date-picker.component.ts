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
  /**
   * Pass callout props to callout component
   */
  @Input()
  @ReactComponentProp()
  calloutProps: ICalloutProps;

  /**
   * Pass calendar props to calendar component
   */
  @Input()
  @ReactComponentProp()
  calendarProps: ICalendarProps;

  /**
   * Label for the DatePicker
   */
  @Input()
  @ReactComponentProp()
  label: string;

  /**
   * Whether the DatePicker is a required field or not
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  isRequired: boolean;

  /**
   * Disabled state of the DatePicker.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  disabled: boolean;

  /**
   * Whether or not the Textfield of the DatePicker is underlined.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  underlined: boolean;

  /**
   * Aria label for date picker popup for screen reader users.
   * @defaultvalue Calendar
   */
  @Input()
  @ReactComponentProp()
  pickerAriaLabel: string;

  /**
   * Whether the month picker is shown beside the day picker or hidden.
   * @defaultvalue true
   */
  @Input()
  @ReactComponentProp()
  isMonthPickerVisible: boolean;

  /**
   * Show month picker on top of date picker when visible.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  showMonthPickerAsOverlay: boolean;

  /**
   * Whether the DatePicker allows input a date string directly or not
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  allowTextInput: boolean;

  /**
   * Whether the DatePicker should open automatically when the control is focused
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  disableAutoFocus: boolean;

  /**
   * Placeholder text for the DatePicker
   */
  @Input()
  @ReactComponentProp()
  placeholder: string;

  /**
   * Value of today. If null, current time in client machine will be used.
   */
  @Input()
  @ReactComponentProp()
  today: Date;

  /**
   * Default value of the DatePicker, if any
   */
  @Input()
  @ReactComponentProp()
  value: Date;

  /**
   * Optional method to format the chosen date to a string to display in the DatePicker
   * @defaultvalue date.toString()
   */
  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  formatDate: (date: Date) => string;

  /**
   * Optional method to parse the text input value to date, it is only useful when allowTextInput is set to true
   * @defaultvalue new Date(Date.parse(dateStr))
   */
  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  parseDateFromString: (dateStr: string) => Date | null;

  /**
   * The first day of the week for your locale.
   * @defaultvalue DayOfWeek.Sunday
   */
  @Input()
  @ReactComponentProp()
  firstDayOfWeek: DayOfWeek;

  /**
   * Localized strings to use in the DatePicker
   */
  @Input()
  @ReactComponentProp()
  strings: IDatePickerStrings;

  /**
   * Whether the month picker should highlight the current month
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  highlightCurrentMonth: boolean;

  /**
   * Whether the month picker should highlight the selected month
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  highlightSelectedMonth: boolean;

  /**
   * Whether the calendar should show the week number (weeks 1 to 53) before each week row
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  showWeekNumbers: boolean;

  /**
   * Defines when the first week of the year should start, FirstWeekOfYear.FirstDay,
   * FirstWeekOfYear.FirstFullWeek or FirstWeekOfYear.FirstFourDayWeek are the possible values
   * @defaultvalue FirstWeekOfYear.FirstFullWeek
   */
  @Input()
  @ReactComponentProp()
  firstWeekOfYear: FirstWeekOfYear;

  /**
   * Whether the "Go to today" link should be shown or not
   */
  @Input()
  @ReactComponentProp()
  showGoToToday: boolean;

  /**
   * Determines if DatePicker has a border.
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  borderless: boolean;

  /**
   * Apply additional formating to dates, for example localized date formatting.
   */
  @Input()
  @ReactComponentProp()
  dateTimeFormatter: ICalendarFormatDateCallbacks;

  /**
   * The minimum allowable date.
   */
  @Input()
  @ReactComponentProp()
  minDate: Date;

  /**
   * The maximum allowable date.
   */
  @Input()
  @ReactComponentProp()
  maxDate: Date;

  /**
   * The initially highlighted date in the calendar picker
   */
  @Input()
  @ReactComponentProp()
  initialPickerDate: Date;

  /**
   * Allows all elements to be focused, including disabled ones
   * @defaultvalue false
   */
  @Input()
  @ReactComponentProp()
  allFocusable: boolean;

  /**
   * Callback that runs after DatePicker's menu (Calendar) is closed
   */
  @Output()
  @ReactComponentProp({
    name: "onAfterMenuDismiss"
  })
  afterMenuDismiss: EventEmitter<IComponentEvent> = new EventEmitter();

  /**
   * Whether the CalendarDay close button should be shown or not.
   */
  @Input()
  @ReactComponentProp()
  showCloseButton: boolean;

  /**
   * The tabIndex of the TextField
   */
  @Input()
  @ReactComponentProp()
  tabIndex: number;
  /**
   * Callback for when the input value changes.
   */
  @ReactComponentProp()
  private onSelectDate = (newValue: React.FormEvent<Date>) => {
    // call writevalue to allow for ngModel
    // updates
    // this.writeValue(newValue);
    this.onModelValueChanged(newValue);
    if (this.change) {
      this.change.emit({
        arguments: [newValue]
      });
    }
  };
  onModelValueChanged = val => (this.value = val);
}
