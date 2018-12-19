import { Directive } from "@angular/core";

/**
 * Represents a directive that provides rendering templates for
 * rendering function by their prop name
 */
@Directive({
  selector: "[fabricRenderingTemplate]"
})
export class RenderingTemplateDirective {
  constructor() {}
}
