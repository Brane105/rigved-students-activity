import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemonsComponent } from './demons/demons.component';
import { DemonDetailComponent } from './demon-detail/demon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DemonsComponent,
    DemonDetailComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
