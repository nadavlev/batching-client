import { NaiveTestComponent } from './naive-test/naive-test.component';
import { HomeComponent } from './home/home.component';
import { InitialTestComponent } from './initial-test/initial-test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConstantBatchSizeComponent} from './constant-batch-size/constant-batch-size.component';


const routes: Routes = [
  { path: 'naiveTest/:fetchQuantity', component: NaiveTestComponent,  },
  { path: 'naiveTest', component: NaiveTestComponent },
  { path: 'constant-batch-size', component: ConstantBatchSizeComponent},
  { path: 'constant-batch-size/:batchSize', component: ConstantBatchSizeComponent},
  { path: 'initial', component: InitialTestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
