// Copyright (c) 2018 Eswar Prakash
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { NgModule } from "@angular/core";
import { IconComponent } from "./icon/icon.component";
import { DefaultButtonComponent } from "./default-button/default-button.component";
import { PrimaryButtonComponent } from "./primary-button/primary-button.component";
import { CompoundButtonComponent } from "./compound-button/compound-button.component";
import { CommandBarButtonComponent } from "./command-bar-button/command-bar-button.component";
import { IconButtonComponent } from "./icon-button/icon-button.component";
import { ActionButtonComponent } from "./action-button/action-button.component";
import { NavComponent } from "./nav/nav.component";
import { PanelComponent } from "./panel/panel.component";
import { LabelComponent } from "./label/label.component";
import { LinkComponent } from "./link/link.component";
import { RatingComponent } from "./rating/rating.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { CommandBarComponent } from "./command-bar/command-bar.component";
import { NormalPeoplePickerComponent } from "./normal-people-picker/normal-people-picker.component";
import { CommonModule } from "@angular/common";
import { TextFieldComponent } from "./text-field/text-field.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { ChoiceGroupComponent } from "./choice-group/choice-group.component";
import { ComboBoxComponent } from "./combo-box/combo-box.component";
import { NgReactProxyModule } from "@eswarpr/ng-react-proxy-helpers";
import { PANEL_RENDERING_DIRECTIVES } from "./panel/panel-directives";
import { BUTTON_RENDERING_DIRECTIVES } from "./button-directives";
import { TEXTFIELD_RENDERING_DIRECTIVES } from "./text-field/text-field-directives";
import { CHECKBOX_RENDERING_DIRECTIVES } from "./checkbox/check-box-directives";
import { BREADCRUMB_RENDERING_DIRECTIVES } from "./breadcrumb/breadcrumb-directives";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { SearchboxComponent } from "./searchbox/searchbox.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { SliderComponent } from "./slider/slider.component";
import { CalloutComponent } from './callout/callout.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DetailsList } from "office-ui-fabric-react";
import { DetailsListComponent } from "./details-list/details-list.component";
@NgModule({
  declarations: [
    IconComponent,
    DefaultButtonComponent,
    PrimaryButtonComponent,
    CompoundButtonComponent,
    CommandBarButtonComponent,
    IconButtonComponent,
    ActionButtonComponent,
    NavComponent,
    PanelComponent,
    LabelComponent,
    LinkComponent,
    RatingComponent,
    BreadcrumbComponent,
    CommandBarComponent,
    SliderComponent,
    DatePickerComponent,
    SearchboxComponent,
    NormalPeoplePickerComponent,
    TextFieldComponent,
    CheckboxComponent,
    ChoiceGroupComponent,
    ComboBoxComponent,
    PANEL_RENDERING_DIRECTIVES,
    TEXTFIELD_RENDERING_DIRECTIVES,
    BUTTON_RENDERING_DIRECTIVES,
    CHECKBOX_RENDERING_DIRECTIVES,
    BREADCRUMB_RENDERING_DIRECTIVES,
    DropdownComponent,
    CalloutComponent,
    ToggleComponent,
    DetailsListComponent
  ],
  imports: [CommonModule, NgReactProxyModule],
  exports: [
    IconComponent,
    DefaultButtonComponent,
    PrimaryButtonComponent,
    CompoundButtonComponent,
    CommandBarButtonComponent,
    IconButtonComponent,
    ActionButtonComponent,
    NavComponent,
    PanelComponent,
    LabelComponent,
    LinkComponent,
    RatingComponent,
    BreadcrumbComponent,
    CommandBarComponent,
    NormalPeoplePickerComponent,
    TextFieldComponent,
    CheckboxComponent,
    ChoiceGroupComponent,
    ComboBoxComponent,
    DropdownComponent,
    SearchboxComponent,
    DatePickerComponent,
    SliderComponent,
    PANEL_RENDERING_DIRECTIVES,
    TEXTFIELD_RENDERING_DIRECTIVES,
    BUTTON_RENDERING_DIRECTIVES,
    CHECKBOX_RENDERING_DIRECTIVES,
    BREADCRUMB_RENDERING_DIRECTIVES,
    CalloutComponent,
    ToggleComponent,
    DetailsListComponent
  ]
})
export class NgFabricModule {}
