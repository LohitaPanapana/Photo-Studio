import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomImageComponent } from './random-image/random-image.component';

const routes: Routes = [
  {
    path: '', component: RandomImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomRoutingModule { }
