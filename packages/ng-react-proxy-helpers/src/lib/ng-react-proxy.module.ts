import { NgModule } from "@angular/core";
import { NgReactElementForDirective } from "./ng-react-element-for.directive";
import { NgReactTemplateContainerDirective } from "./ng-react-template-container.directive";

/**
 * Copyright (c) 2019 Eswar Prakash
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Represents a module that exports directives
 * for configuring the ng-react-proxy
 */
@NgModule({
  declarations: [NgReactElementForDirective, NgReactTemplateContainerDirective],
  exports: [NgReactElementForDirective, NgReactTemplateContainerDirective]
})
export class NgReactProxyModule {}
