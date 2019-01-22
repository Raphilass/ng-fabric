import { Directive } from "@angular/core";
import { RenderingContainerName } from "../decorators";
import { TemplateRenderingDirective } from "../template-rendering-directive";

/**
 * Represents a directive that can be used to configure template
 * for checkbox labels
 */
@Directive({
  selector: "[checkboxLabel]"
})
@RenderingContainerName("label")
export class CheckboxLabelDirective extends TemplateRenderingDirective {}

export const CHECKBOX_RENDERING_DIRECTIVES = [CheckboxLabelDirective];
