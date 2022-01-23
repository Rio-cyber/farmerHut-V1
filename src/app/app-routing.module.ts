import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerComponent } from './consumer/consumer.component';
import { ConsumerregComponent } from './consumerreg/consumerreg.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { FarmerregisterComponent } from './farmerregister/farmerregister.component';
import { NewcropComponent } from './newcrop/newcrop.component';
import { ShowcropComponent } from './showcrop/showcrop.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'consumerlog', component: ConsumerComponent },
  { path: 'consumerreg', component: ConsumerregComponent },
  { path: 'Farmerlog', component: FarmerloginComponent },
  { path: 'Farmerreg', component: FarmerregisterComponent },
  { path: 'newcrop', component: NewcropComponent },
  { path: 'showcrop', component: ShowcropComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
