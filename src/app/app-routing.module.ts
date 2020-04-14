import { NaiveTestComponent } from './naive-test/naive-test.component';
import { HomeComponent } from './home/home.component';
import { InitialTestComponent } from './initial-test/initial-test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'naiveTest', component: NaiveTestComponent },
  { path: 'initial', component: InitialTestComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
