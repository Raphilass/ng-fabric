import {
  Directive,
  DoCheck,
  Renderer2,
  ElementRef,
  HostBinding,
  Input,
  OnChanges
} from "@angular/core";

/**
 * Copyright (c) 2019 Eswar Prakash
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Represents a directive that configures a host element
 * as a rendering template for the component. This directive
 * allows sections of your component to host templates that
 * will be configured as methods returning React elements
 */
@Directive({
  selector: "[ngReactElementFor]"
})
export class NgReactElementForDirective implements OnChanges {
  @HostBinding("attr.react-rendering-template")
  private _renderingTemplate: string | undefined;

  @Input()
  ngReactElementFor: string | undefined;

  /**
   * Initializes a new instance of this class
   */
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnChanges() {
    if (this.ngReactElementFor) {
      this._renderingTemplate = this.ngReactElementFor;
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, "display", "none");
    }
  }
}
