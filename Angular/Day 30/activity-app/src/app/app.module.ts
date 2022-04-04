import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { honorificPipe } from './employee-data/pipe-demo.component';
import { AppComponent } from './app.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDataComponent,
    honorificPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
