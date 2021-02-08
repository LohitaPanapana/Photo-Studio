import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomRoutingModule } from './random-routing.module';
import { RandomImageComponent } from './random-image/random-image.component';

@NgModule({
  declarations: [RandomImageComponent],
  imports: [
    CommonModule,
    RandomRoutingModule
  ]
})
export class RandomModule { }
