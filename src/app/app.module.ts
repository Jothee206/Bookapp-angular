import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AddbookComponent } from './addbook/addbook.component';

import { ListuserComponent } from './listuser/listuser.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
  
    UpdatebookComponent,
    AddbookComponent,
   
    ListuserComponent,
    ViewUserComponent,
    ListbooksComponent,
    UpdateUserComponent,
    DisplayBookComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
