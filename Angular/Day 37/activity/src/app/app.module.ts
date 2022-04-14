import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreFormComponent } from './store-form/store-form.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { SuccessComponent } from './success/success.component';

let route : Routes =[
  {path:"",component:StoreFormComponent},
  {path:"store",component:StoreFormComponent},
  {path:"delete",component:DeleteComponent},
  {path:"display",component:DisplayListComponent},
  {path:"success/:id",component:SuccessComponent},
  {path:"create",component:StoreFormComponent},
  {path:"update",component:UpdateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StoreFormComponent,
    DisplayListComponent,
    DeleteComponent,
    UpdateComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
