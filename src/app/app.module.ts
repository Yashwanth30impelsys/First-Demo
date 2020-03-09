import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {LoginModel} from "./login.model";
import{ LoginService} from "./login.service";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";
import { AddComponent } from "./add/add.component";
import { DeleteComponent } from './delete/delete.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,ViewComponent,
    EditComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,MaterialModule,FlexLayoutModule,
    FormsModule,HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
