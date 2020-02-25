import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  exports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
