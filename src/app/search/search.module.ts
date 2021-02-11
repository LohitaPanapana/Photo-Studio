import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchImageComponent } from './search-image/search-image.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';


@NgModule({
  declarations: [SearchImageComponent, ImageDetailComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
