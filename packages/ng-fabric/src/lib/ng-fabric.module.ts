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
import { RenderingTemplateDirective } from "./rendering-template.directive";
import { TextFieldComponent } from "./text-field/text-field.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { ChoiceGroupComponent } from "./choice-group/choice-group.component";
import { ComboBoxComponent } from "./combo-box/combo-box.component";
<<<<<<< HEAD
import { PanelHeaderDirective } from './panel-header.directive';
=======
import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SliderComponent } from './slider/slider.component';
>>>>>>> Added Components

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
    NormalPeoplePickerComponent,
    RenderingTemplateDirective,
    TextFieldComponent,
    CheckboxComponent,
    ChoiceGroupComponent,
    ComboBoxComponent,
<<<<<<< HEAD
    PanelHeaderDirective
=======
    DropdownComponent,
    SearchboxComponent,
    DatePickerComponent,
    SliderComponent
>>>>>>> Added Components
  ],
  imports: [CommonModule],
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
    RenderingTemplateDirective,
    TextFieldComponent,
    CheckboxComponent,
    ChoiceGroupComponent,
    ComboBoxComponent,
<<<<<<< HEAD
    PanelHeaderDirective
=======
    DropdownComponent,
    SearchboxComponent,
    DatePickerComponent,
    SliderComponent
>>>>>>> Added Components
  ]
})
export class NgFabricModule {}
