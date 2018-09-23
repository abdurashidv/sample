import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondComponent } from './components/second/second.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstComponent } from './components/first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
