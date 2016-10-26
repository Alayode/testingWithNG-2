import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {YamanoteStudiosFooterComponent} from './yamanote-studios-footer/yamanote-studios-footer.component';
import {YamanoteStudiosInputComponent} from './yamanote-studios-input/yamanote-studios-input.component';
import {YamanoteStudiosCreditCardTypeDropdownComponent} from './yamanote-studios-credit-card-type-dropdown/yamanote-studios-credit-card-type-dropdown.component';
import {YamanoteStudiosTitleDropdownComponent} from './yamanote-studios-title-dropdown/yamanote-studios-title-dropdown.component';


// primeng modules
import {DropDownModule} from 'primeng/primeng';
import {YamanoteStudiosCountryDropdownComponent} from './yamanote-studios-country-dropdown/yamanote-studios-country-dropdown.component';
import { YamanoteStudiosAlertBoxComponent } from './yamanote-studios-alert-box/yamanote-studios-alert-box.component';
import { YamanoteStudiosBubbleTipComponent } from './yamanote-studios-bubble-tip/yamanote-studios-bubble-tip.component';


//create a router config
export const routeConfig = [
  {path: '', redirectsTo: '/', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    YamanoteStudiosFooterComponent,
    YamanoteStudiosInputComponent,
    YamanoteStudiosCreditCardTypeDropdownComponent,
    YamanoteStudiosTitleDropdownComponent,
    YamanoteStudiosCountryDropdownComponent,
    YamanoteStudiosAlertBoxComponent,
    YamanoteStudiosBubbleTipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule, RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
