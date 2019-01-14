import { Directive, TemplateRef, Host } from "@angular/core";
import { TemplateRenderingDirective } from "../template-rendering-directive";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";

/**
 * Represents a directive that can be used to configure template
 * for panel footer
 */
@Directive({
  selector: "[panelFooterContent]"
})
export class PanelFooterContentDirective extends TemplateRenderingDirective {
  /**
   * Initializes a new instance of the class
   */
  constructor(
    templateRef: TemplateRef<any>,
    @Host() hostDataProvider: HostDataProvider
  ) {
    super(templateRef, hostDataProvider, "panelFooterContent");
  }
}

/**
 * Represents a directive that can be used render the header for
 * fabric-panel
 */
@Directive({
  selector: "[panelHeader]"
})
export class PanelHeaderDirective extends TemplateRenderingDirective {
  /**
   * Initializes a new instance of the class
   */
  constructor(
    templateRef: TemplateRef<any>,
    @Host() hostDataProvider: HostDataProvider
  ) {
    super(templateRef, hostDataProvider, "panelHeader");
  }
}

/**
 * Represents a directive that can be used render the header for
 * fabric-panel
 */
@Directive({
  selector: "[panelNavigation]"
})
export class PanelNavigationDirective extends TemplateRenderingDirective {
  /**
   * Initializes a new instance of the class
   */
  constructor(
    templateRef: TemplateRef<any>,
    @Host() hostDataProvider: HostDataProvider
  ) {
    super(templateRef, hostDataProvider, "panelNavigation");
  }
}

@Directive({
  selector: "[panelFooter]"
})
export class PanelFooterDirective extends TemplateRenderingDirective {
  /**
   * Initializes a new instance of the class
   */
  constructor(
    templateRef: TemplateRef<any>,
    @Host() hostDataProvider: HostDataProvider
  ) {
    super(templateRef, hostDataProvider, "panelFooter");
  }
}
