
// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Input } from "@angular/core";

/**
 * Represents a base component for all the Office UI Fabric components that
 * can be styled
 */
export abstract class NgFabricStylableComponent {
  /**
   * Specifies additional CSS styles to be applied to the component
   */
  @Input()
  additionalStyles: string;

  /**
   * Gets a composite style value to be applied in the view combining
   * the additional styles specified to the list of styles
   * provided
   * @param styles The additional list of styles to apply
   */
  _getCompositeStyles(...styles: Array<string>): string {
    const _newStyles: Array<string> = styles || [];
    return _newStyles.join(" ");
  }
}
