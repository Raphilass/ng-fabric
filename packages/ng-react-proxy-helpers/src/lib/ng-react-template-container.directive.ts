import {
  Input,
  OnChanges,
  ViewContainerRef,
  Directive,
  OnInit,
  TemplateRef,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";
import { NgReactElementForDirective } from "./ng-react-element-for.directive";

/**
 * Copyright (c) 2019 Eswar Prakash
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * Represents a directive that configures the host element contents
 * as a container within the host component
 */
@Directive({
  selector: "[ngReactTemplateContainer]"
})
export class NgReactTemplateContainerDirective implements OnChanges {
  @Input()
  ngReactTemplateContainerName: string | undefined;

  @Input()
  ngReactTemplateContainerElementFor: string | undefined;

  ngOnChanges() {
    if (
      this.ngReactTemplateContainerName &&
      this.ngReactTemplateContainerElementFor
    ) {
      const _containerTemplate = this.hostDataProvider.getTemplateForContainer(
        this.ngReactTemplateContainerName
      );
      if (_containerTemplate) {
        // create the context for the template
        const _context = {
          $implicit: this.hostDataProvider.getHostProps()
        };

        this.viewContainerRef.clear();
        const _view = this.viewContainerRef.createEmbeddedView(
          _containerTemplate,
          _context
        );
        if (_view.rootNodes.length > 0) {
          const _hostElement = document.createElement("div");
          this.renderer.setAttribute(
            _hostElement,
            "react-rendering-template",
            this.ngReactTemplateContainerElementFor
          );
          let _parentElement = this.viewContainerRef.element.nativeElement;
          while (_parentElement.nodeType !== Node.ELEMENT_NODE) {
            _parentElement = _parentElement.parentElement;
          }
          _view.rootNodes.forEach(n => _hostElement.appendChild(n));
          _parentElement.appendChild(_hostElement);
        }
      }
    }
  }

  constructor(
    private hostDataProvider: HostDataProvider,
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2
  ) {}
}
