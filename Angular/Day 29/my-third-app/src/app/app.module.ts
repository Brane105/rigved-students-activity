import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserComponent } from './user/user.component';
import { DemonsComponent } from './demons/demons.component';
import { DemonlistComponent } from './demonlist/demonlist.component';

@NgModule({
  declarations: [
    AppComponent,UserComponent,DemoComponent, DemonsComponent, DemonlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
