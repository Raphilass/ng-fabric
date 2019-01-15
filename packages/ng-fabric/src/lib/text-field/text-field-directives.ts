import { Directive, TemplateRef, Host } from "@angular/core";
import { TemplateRenderingDirective } from "../template-rendering-directive";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";

/**
 * Represents a directive that can be used to configure template
 * for panel footer
 */
@Directive({
  selector: "[textFieldLabel]"
})
export class TextFieldLabelDirective extends TemplateRenderingDirective {
  /**
   * Initializes a new instance of the class
   */
  constructor(
    templateRef: TemplateRef<any>,
    @Host() hostDataProvider: HostDataProvider
  ) {
    super(templateRef, hostDataProvider, "labelTemplate");
  }
}
