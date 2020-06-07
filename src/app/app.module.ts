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

@NgModule({
  declarations: [
    AppComponent,
    InitialTestComponent,
    HomeComponent,
    NaiveTestComponent,
    TimingObjectDisplayComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
