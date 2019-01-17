// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import {
  ReactComponentHost,
  ReactComponentProp
} from "@eswarpr/ng-react-proxy";
import {
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { IButton } from "office-ui-fabric-react";

export abstract class FabricComponent extends ReactComponentHost {
  /**
   * Initializes a new instance of the class
   */
  public constructor() {
    super();
  }
  /**
   * Specifies if the contents of this content will only contain
   * text nodes
   */
  textContent = false;
  /**
   * Specifies the host element that will be used
   * to render the React component to
   */
  @ViewChild("host")
  _host: ElementRef;
  /**
   * Optional callback to access the IButton interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  @Output()
  @ReactComponentProp()
  componentRef: EventEmitter<IButton> = new EventEmitter();
  /**
   * The aria label of the button for the benefit of screen readers.
   */
  @Input()
  @ReactComponentProp()
  ariaLabel: string;
  /**
   * Detailed description of the button for the benefit of screen readers.
   *
   * Besides the compound button, other button types will need more information provided to screen reader.
   */
  @Input()
  @ReactComponentProp()
  ariaDescription: string;
  /**
   * If provided and is true it adds an 'aria-hidden' attribute instructing screen readers to ignore the element.
   */
  @Input()
  @ReactComponentProp()
  ariaHidden: boolean;
  /**
   * If provided, additional class name to provide on the root element.
   */
  @Input()
  @ReactComponentProp()
  className: string;
  /**
   * Renders the component as disabled.
   */
  @Input()
  @ReactComponentProp()
  disabled: boolean;
  /**
   * Gets the native element that will host the React
   * component
   */
  getHostElement() {
    return this._host;
  }
}
