// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { FabricComponent } from "./fabric-component";
import {
  Input,
  Output,
  EventEmitter,
  ResolvedReflectiveFactory
} from "@angular/core";
import {
  IPersonaProps,
  IInputProps,
  ICalloutProps,
  IBasePickerSuggestionsProps,
  ValidationState,
  ISuggestionModel,
  IPersonaSharedProps
} from "office-ui-fabric-react";
import { IComponentEvent, ReactComponentProp } from "./imports";
import { Observable } from "rxjs";
import { FabricInputComponent } from "./fabric-input-component";

/**
 * Represents an abstract base class to implement various
 * people picker components
 */
export abstract class BasePeoplePickerComponent extends FabricInputComponent {
  /**
   * A callback for what should happen when a person types text into the input.
   * Returns the already selected items so the resolver can filter them out.
   * If used in conjunction with resolveDelay this will ony kick off after the delay throttle.
   */
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  onResolveSuggestions: (
    filter: string,
    selectedItems?: Array<IPersonaSharedProps>
  ) =>
    | Array<IPersonaSharedProps>
    | PromiseLike<Array<IPersonaSharedProps>>
    | Observable<Array<IPersonaSharedProps>>;
  /**
   * A callback to get text from an item. Used to autofill text in the pickers.
   */
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  getTextFromItem: (item: IPersonaSharedProps, currentValue?: string) => string;
  /**
   * Function that specifies how arbitrary text entered into the well is handled.
   */
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  createGenericItem: (
    input: string,
    ValidationState: ValidationState
  ) => ISuggestionModel<IPersonaSharedProps> | IPersonaSharedProps;
  /**
   * Gets the current value of the input.
   */
  @ReactComponentProp({
    enableRead: true
  })
  items:
    | Array<IPersonaSharedProps>
    | PromiseLike<Array<IPersonaSharedProps>>
    | Observable<Array<IPersonaSharedProps>>;
  /**
   * Initial items that have already been selected and should appear in the people picker.
   */
  @Input()
  @ReactComponentProp()
  defaultSelectedItems: Array<IPersonaSharedProps>;
  /**
   * Adds an additional alert for the currently selected suggestion. This prop should be set to true for IE11 and below, as it
   * enables proper screen reader behavior for each suggestion (since aria-activedescendant does not work with IE11).
   * It should not be set for modern browsers (Edge, Chrome).
   */
  @Input()
  @ReactComponentProp()
  enableSelectedSuggestionAlert: boolean;
  /**
   * AutoFill input native props
   */
  @Input()
  @ReactComponentProp()
  inputProps: IInputProps;
  /**
   * Restrict the amount of selectable items.
   */
  @Input()
  @ReactComponentProp()
  itemLimit: number = undefined;
  /**
   * A callback for when the user moves the focus away from the picker
   */
  @Output()
  @ReactComponentProp()
  onBlur: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * A callback for when the selected list of items changes.
   */
  @Output()
  change: EventEmitter<IComponentEvent> = new EventEmitter();

  /**
   * A callback for what should happen when a user clicks the input.
   */
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  onEmptyInputFocus: (
    selectedItems?: IPersonaSharedProps[]
  ) => IPersonaSharedProps[] | PromiseLike<IPersonaSharedProps[]>;
  /**
   * A callback to override the default behavior of adding the selected suggestion on dismiss.
   */
  @Output()
  @ReactComponentProp({
    name: "onDismiss"
  })
  dismiss: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * A callback for what should happen when a user clicks the input.
   */
  @Output()
  @ReactComponentProp({
    name: "onFocus"
  })
  focus: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * A callback for when the user put focus on the picker
   */
  @Output()
  @ReactComponentProp({
    name: "onRemoveSuggestion"
  })
  removeSuggestion: EventEmitter<IComponentEvent> = new EventEmitter();
  /**
   * The properties that will get passed to the Callout component.
   */
  @Input()
  @ReactComponentProp()
  pickerCalloutProps: ICalloutProps;
  /**
   * The properties that will get passed to the Suggestions component.
   */
  @Input()
  @ReactComponentProp()
  pickerSuggestionsProps: IBasePickerSuggestionsProps;
  /**
   * Aria label for the "X" button in the selected item component.
   */
  @Input()
  @ReactComponentProp()
  removeButtonAriaLabel: string;
  /**
   * The delay time in ms before resolving suggestions, which is kicked off when input has been changed.
   * e.g. If a second input change happens within the resolveDelay time, the timer will start over.
   * Only until after the timer completes will onResolveSuggestions be called.
   */
  @Input()
  @ReactComponentProp()
  resolveDelay: number;
  /**
   * The items that the base picker should currently display as selected.
   * If this is provided then the picker will act as a controlled component.
   */
  @Input()
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  selectedItems: Array<IPersonaSharedProps>;
  /**
   * A callback that gets the rest of the results when a user clicks get more results.
   */
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  onGetMoreResults: (
    filter: string,
    selectedItems?: Array<IPersonaSharedProps>
  ) =>
    | Array<IPersonaSharedProps>
    | PromiseLike<Array<IPersonaSharedProps>>
    | Observable<Array<IPersonaSharedProps>>;
  /**
   * A function used to validate if raw text entered into the well can be added into the selected items list
   */
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  onValidateInput: (input: string) => ValidationState;
  /**
   * The text to display while searching for more results in a limited suggestions list
   */
  @ReactComponentProp({
    enableExplicitChangeDetection: true
  })
  searchingText: ((props: { input: string }) => string) | string;
  /**
   * Handles the onChange callback from the underlying component
   * so we can handle it for ngModel
   */
  @ReactComponentProp()
  onChange = (items?: Array<IPersonaSharedProps>) => {
    // ensure the form system knows
    this.onViewValueChanged(items);
    if (this.change) {
      this.change.emit({
        arguments: [items]
      });
    }
  }
  onModelValueChanged = (val) => this.selectedItems = val;
}
