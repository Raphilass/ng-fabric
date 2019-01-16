import { Directive, TemplateRef, Host } from "@angular/core";
import { TemplateRenderingDirective } from "../template-rendering-directive";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";

/**
 * Represents a directive that can be used to configure template
 * for the field label
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

/**
 * Represents a directive that can be used to configure template
 * for text field description
 */
@Directive({
  selector: "[textFieldDescription]"
})
export class TextFieldDescriptionDirective extends TemplateRenderingDirective {
  /**
   * Initializes a new instance of the class
   */
  constructor(
    templateRef: TemplateRef<any>,
    @Host() hostDataProvider: HostDataProvider
  ) {
    super(templateRef, hostDataProvider, "description");
  }
}

/**
 * Represents a directive that can be used to configure template
 * for text field prefix
 */
@Directive({
  selector: "[textFieldPrefix]"
})
export class TextFieldPrefixDirective extends TemplateRenderingDirective {
  /**
   * Initializes a new instance of the class
   */
  constructor(
    templateRef: TemplateRef<any>,
    @Host() hostDataProvider: HostDataProvider
  ) {
    super(templateRef, hostDataProvider, "prefix");
  }
}

/**
 * Represents a directive that can be used to configure template
 * for text field description
 */
@Directive({
  selector: "[textFieldSuffix]"
})
export class TextFieldSuffixDirective extends TemplateRenderingDirective {
  /**
   * Initializes a new instance of the class
   */
  constructor(
    templateRef: TemplateRef<any>,
    @Host() hostDataProvider: HostDataProvider
  ) {
    super(templateRef, hostDataProvider, "suffix");
  }
}

