import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialTestComponent } from './initial-test/initial-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NaiveTestComponent } from './naive-test/naive-test.component';
import { TimingObjectDisplayComponent } from './timing-object-display/timing-object-display.component';
import { ConstantBatchSizeComponent } from './constant-batch-size/constant-batch-size.component';
import {MatSelectModule} from '@angular/material/select';
import {AgGridModule} from 'ag-grid-angular';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    InitialTestComponent,
    HomeComponent,
    NaiveTestComponent,
    TimingObjectDisplayComponent,
    ConstantBatchSizeComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    AgGridModule.withComponents([]),
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
