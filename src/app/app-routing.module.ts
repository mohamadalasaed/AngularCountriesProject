import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpecificCountryComponent } from './specific-country/specific-country.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'country/:name', component: SpecificCountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
