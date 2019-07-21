import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PickcolorComponent } from './pickcolor/pickcolor.component';
import { SelectedcolorComponent } from './selectedcolor/selectedcolor.component';

@NgModule({
  declarations: [
    AppComponent,
    PickcolorComponent,
    SelectedcolorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
