import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ConsumerregComponent } from './consumerreg/consumerreg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerregComponent } from './customerreg/customerreg.component';
import { FarmerregisterComponent } from './farmerregister/farmerregister.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { NewcropComponent } from './newcrop/newcrop.component';
import { ShowcropComponent } from './showcrop/showcrop.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent,
    ConsumerregComponent,
    CustomerregComponent,
    FarmerregisterComponent,
    FarmerloginComponent,
    NewcropComponent,
    ShowcropComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
