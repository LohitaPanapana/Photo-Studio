import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchImageComponent } from './search-image/search-image.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { SentencePipe } from './sentence.pipe';
@NgModule({
  declarations: [SearchImageComponent, ImageDetailComponent, SentencePipe],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
