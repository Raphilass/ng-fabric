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
      this.hostDataProvider.setTemplateForContainer(this.containerName, this.templateRef);
    }
  }
  ngOnChanges() {
    this.updateView();
  }
  ngOnInit() {
    this.updateView();
  }
}
