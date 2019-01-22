import { Directive, TemplateRef, Host } from "@angular/core";
import { TemplateRenderingDirective } from "../template-rendering-directive";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";
import { RenderingContainerName } from "../decorators";

/**
 * Represents a directive that can be used to configure template
 * for the field label
 */
@Directive({
  selector: "[textFieldLabel]"
})
@RenderingContainerName("labelTemplate")
export class TextFieldLabelDirective extends TemplateRenderingDirective {}

/**
 * Represents a directive that can be used to configure template
 * for text field description
 */
@Directive({
  selector: "[textFieldDescription]"
})
@RenderingContainerName("description")
export class TextFieldDescriptionDirective extends TemplateRenderingDirective {}

/**
 * Represents a directive that can be used to configure template
 * for text field prefix
 */
@Directive({
  selector: "[textFieldPrefix]"
})
@RenderingContainerName("prefix")
export class TextFieldPrefixDirective extends TemplateRenderingDirective {}

/**
 * Represents a directive that can be used to configure template
 * for text field description
 */
@Directive({
  selector: "[textFieldSuffix]"
})
@RenderingContainerName("suffix")
export class TextFieldSuffixDirective extends TemplateRenderingDirective {}

export const TEXTFIELD_RENDERING_DIRECTIVES = [
  TextFieldLabelDirective,
  TextFieldDescriptionDirective,
  TextFieldPrefixDirective,
  TextFieldSuffixDirective
];
