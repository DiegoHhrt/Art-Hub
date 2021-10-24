import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogamesRoutingModule } from './videogames-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    VideogamesRoutingModule
  ]
})
export class VideogamesModule { }
