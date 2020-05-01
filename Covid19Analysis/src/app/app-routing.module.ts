import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayWiseDataComponent } from './day-wise-data/day-wise-data.component';
import { AgeWiseDataComponent } from './age-wise-data/age-wise-data.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'dateWise', component: DayWiseDataComponent },
  { path: 'ageWise', component: AgeWiseDataComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
