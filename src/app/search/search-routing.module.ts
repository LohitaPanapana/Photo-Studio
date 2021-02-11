
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { SearchImageComponent } from './search-image/search-image.component';

const routes: Routes = [
  {
    path: '', component: SearchImageComponent,
  },
  {
    path: ':id', component: ImageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
