import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { initializeIcons } from "@uifabric/icons";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

initializeIcons();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
