import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const routes: Array<Route> = [{
}];

/**
 * Represents the routing module for this app
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {
      useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
