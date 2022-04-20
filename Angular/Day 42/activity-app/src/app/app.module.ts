import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreUserComponent } from './store-user/store-user.component';
import { FindAllusersComponent } from './find-allusers/find-allusers.component';
import { FindOneuserComponent } from './find-oneuser/find-oneuser.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    StoreUserComponent,
    FindAllusersComponent,
    FindOneuserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    LoginComponent,
    SuccessComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
