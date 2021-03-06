import { ParsedHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ImageDetails, PhotoService } from '../../photo.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent {
  term: string;
  imageList: ImageDetails[] = [];
  loader$: BehaviorSubject<boolean> = this.photoService.loader;
  
  constructor(private photoService: PhotoService,
              private route: Router) { }

  onSearch(val: string){
    this.term = val;
  }

  onSubmit(event){
    event.preventDefault();
    this.photoService.searchImage(this.term).subscribe(images => {
      this.imageList = images;
      this.photoService.loader.next(false);
    })
  }

  navigate(image: ImageDetails){
    this.photoService.selectedImage.next(image);
    this.route.navigateByUrl('/search/' + image.id);
  }
}
