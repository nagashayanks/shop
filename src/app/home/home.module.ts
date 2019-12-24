import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PracticeComponent } from './practice/practice.component';
import { MyprimeModule } from '../myprime/myprime.module';

@NgModule({
  declarations: [PracticeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MyprimeModule
  ]
})
export class HomeModule { }
