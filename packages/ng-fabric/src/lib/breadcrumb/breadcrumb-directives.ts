import { Directive } from "@angular/core";
import { RenderingContainerName } from "../decorators";
import { TemplateRenderingDirective } from "../template-rendering-directive";

/**
 * Represents a directive that can be used to configure template
 * for breadcrumb items
 */
@Directive({
  selector: "[breadcrumbItem]"
})
@RenderingContainerName("item")
export class BreadcrumbItemDirective extends TemplateRenderingDirective {}

export const BREADCRUMB_RENDERING_DIRECTIVES = [BreadcrumbItemDirective];
