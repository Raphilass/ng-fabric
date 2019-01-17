import {
  TemplateRef,
  DoCheck,
  Host,
  OnChanges,
  AfterViewInit,
  OnInit,
  Injectable
} from "@angular/core";
import { HostDataProvider } from "@eswarpr/ng-react-proxy";
import "reflect-metadata";

/**
 * Represents a base class that implements rendering based
 * on a host view
 */
@Injectable()
export abstract class TemplateRenderingDirective implements OnChanges, OnInit {
  /**
   * Initializes a new instance of this class
   */
  constructor(
    private templateRef: TemplateRef<any>,
    @Host() private hostDataProvider: HostDataProvider
  ) {}

  private updateView() {
    // get the container name from the metadata
    const _containerName = Reflect.getMetadata(
      "templates:containerName",
      this.constructor
    );
    if (_containerName && this.hostDataProvider && this.templateRef) {
      this.hostDataProvider.setTemplateForContainer(
        _containerName,
        this.templateRef
      );
    }
  }
  ngOnChanges() {
    this.updateView();
  }
  ngOnInit() {
    this.updateView();
  }
}
