import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TtttComponent } from './tttt/tttt.component';
import { AaaaComponent } from './aaaa/aaaa.component';

@NgModule({
  declarations: [
    AppComponent,
    TtttComponent,
    AaaaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
