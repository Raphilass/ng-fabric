import { Directive } from "@angular/core";
import { RenderingContainerName } from "./decorators";
import { TemplateRenderingDirective } from "./template-rendering-directive";

// Copyright (c) 2019 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Represents a directive that can be used to configure template
 * for text field text
 */
@Directive({
  selector: "[buttonText]"
})
@RenderingContainerName("text")
export class ButtonTextDirective extends TemplateRenderingDirective {}

/**
 * Represents a directive that can be used to configure template
 * for text field description
 */
@Directive({
  selector: "[buttonDescription]"
})
@RenderingContainerName("description")
export class ButtonDescriptionDirective extends TemplateRenderingDirective {}

export const BUTTON_RENDERING_DIRECTIVES = [
  ButtonTextDirective,
  ButtonDescriptionDirective
];
