import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomPipe } from './custom-pipe';
import { AppComponent } from './app.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
