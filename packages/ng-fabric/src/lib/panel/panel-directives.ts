import { Directive, TemplateRef, Host } from "@angular/core";
import { TemplateRenderingDirective } from "../template-rendering-directive";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";
import { RenderingContainerName } from "../decorators";

/**
 * Represents a directive that can be used to configure template
 * for panel footer
 */
@Directive({
  selector: "[panelFooterContent]"
})
@RenderingContainerName("panelFooterContent")
export class PanelFooterContentDirective extends TemplateRenderingDirective {}

/**
 * Represents a directive that can be used render the header for
 * fabric-panel
 */
@Directive({
  selector: "[panelHeader]"
})
@RenderingContainerName("panelHeader")
export class PanelHeaderDirective extends TemplateRenderingDirective {}

/**
 * Represents a directive that can be used render the header for
 * fabric-panel
 */
@Directive({
  selector: "[panelNavigation]"
})
@RenderingContainerName("panelNavigation")
export class PanelNavigationDirective extends TemplateRenderingDirective {}

@Directive({
  selector: "[panelFooter]"
})
@RenderingContainerName("panelFooter")
export class PanelFooterDirective extends TemplateRenderingDirective {}

export const PANEL_RENDERING_DIRECTIVES = [
  PanelHeaderDirective,
  PanelFooterContentDirective,
  PanelFooterDirective,
  PanelNavigationDirective
];
