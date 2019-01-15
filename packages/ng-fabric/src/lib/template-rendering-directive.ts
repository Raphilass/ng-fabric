import {
  TemplateRef,
  DoCheck,
  Host,
  OnChanges,
  AfterViewInit,
  OnInit
} from "@angular/core";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";

/**
 * Represents a base class that implements rendering based
 * on a host view
 */
export abstract class TemplateRenderingDirective
  implements OnChanges, OnInit {
  /**
   * Initializes a new instance of this class
   */
  constructor(
    private templateRef: TemplateRef<any>,
    private hostDataProvider: HostDataProvider,
    private containerName: string
  ) {}

  private updateView() {
    if (this.hostDataProvider && this.templateRef) {
      // get the container view ref for panel header
      // if it doesn't exist, then nothing to do
      const _container = this.hostDataProvider.getHostViewContainerRef(
        this.containerName
      );
      if (!_container) {
        return;
      }

      // create the context data from the provider
      // get the context data now
      const _contextData = {
        $implicit: this.hostDataProvider.getHostProps()
      };

      // now create the view in the container
      _container.clear();
      _container.createEmbeddedView(this.templateRef, _contextData);
    }
  }
  ngOnChanges() {
    this.updateView();
  }
  ngOnInit() {
    this.updateView();
  }
}
