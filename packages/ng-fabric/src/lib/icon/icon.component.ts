// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from "@angular/core";
import { NgFabricStylableComponent } from "../ng-fabric-stylable-component";

/**
 * Represents a component that can be used to render Office UI Fabric icons. For a list
 * of icons supported see https://developer.microsoft.com/en-us/fabric#/styles/icons
 */
@Component({
  selector: "fabric-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"]
})
export class IconComponent extends NgFabricStylableComponent
  implements OnInit, OnChanges {
  /**
   * Specifies the name of the Office UI Fabric icon to render in the component
   */
  @Input()
  icon: string;

  /**
   * Specifies the composite icon CSS class to be applied to the element
   */
  _iconClass: string;

  /**
   * Creates an instance of FabricIconComponent.
   */
  constructor() {
    super();
  }

  /**
   * Handles the OnInit event of this component
   */
  ngOnInit() {}

  /**
   * Handles the OnChanges event for this component
   */
  ngOnChanges(changes: SimpleChanges): void {
    // if the icon attribute has changed, update the component
    if (changes["icon"] || changes["additionalStyles"]) {
      this._calculateIconClass();
    }
  }

  /**
   *  Calculates the CSS class to be rendered in the page
   */
  private _calculateIconClass(): void {
    // check the icon name and additional styles
    // and create the class name
    this._iconClass = this._getCompositeStyles(
      "ms-Icon",
      `ms-Icon--${this.icon}`,
      this.additionalStyles
    );
  }
}
