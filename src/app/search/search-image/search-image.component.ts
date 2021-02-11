import { ParsedHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageDetails, PhotoService } from '../../photo.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {
  term: string;
  imageList: ImageDetails[] = [];
  constructor(private photoService: PhotoService,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSearch(val: string){
    this.term = val;
  }

  onSubmit(event){
    event.preventDefault();
    this.photoService.searchImage(this.term).subscribe(images => {
      this.imageList = images;
    })
  }

  navigate(image: ImageDetails){
    this.photoService.selectedImage.next(image);
    this.route.navigateByUrl('/search/' + image.id);
  }
}
