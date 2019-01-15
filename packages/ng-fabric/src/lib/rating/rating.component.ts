// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HOST_COMPONENT_TEMPLATE } from "../host-component-template";
import { FabricComponent } from "../fabric-component";
import { ReactComponentProp, ReactComponentType } from "../imports";
import { RatingSize, Rating } from "office-ui-fabric-react";

/**
 * Ratings provide insight regarding others’ opinions and experiences with a product,
 * helping users make more-informed purchasing decisions. Users can also rate products
 * they’ve purchased.
 */
@Component({
  selector: "fabric-rating",
  template: HOST_COMPONENT_TEMPLATE,
  styles: []
})
@ReactComponentType(Rating)
export class RatingComponent extends FabricComponent {
  /**
   * Custom icon
   */
  @Input()
  @ReactComponentProp()
  icon: string;
  /**
   * Maximum rating, defaults to 5, has to be >= min
   */
  @Input()
  @ReactComponentProp()
  max: number;
  /**
   * Selected rating, has to be an integer between min and max
   */
  @Input()
  @ReactComponentProp()
  rating: number;
  /**
   * Optional flag to mark rating control as readOnly
   */
  @Input()
  @ReactComponentProp()
  readOnly: boolean;
  /**
   * Allow the rating value to be set to 0 instead of a minimum of 1.
   */
  @Input()
  @ReactComponentProp()
  allowZeroStars: boolean;
  /**
   * Size of rating, defaults to small
   */
  @Input()
  @ReactComponentProp()
  size: RatingSize;
  /**
   * Callback issued when the rating changes.
   */
  @Output()
  @ReactComponentProp({
    name: "onChange"
  })
  change: EventEmitter<number> = new EventEmitter();
}
