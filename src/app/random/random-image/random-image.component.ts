import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImageDetails, PhotoService } from 'src/app/service/photo.service';

@Component({
  selector: 'app-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.css']
})
export class RandomImageComponent implements OnInit {
  randomImage: ImageDetails;
  loader$: BehaviorSubject<boolean> = this.photoService.loader;
  
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.fetchRandomImage().subscribe(fetchedImage => {
      this.randomImage = fetchedImage;
      this.photoService.loader.next(false);
    });
  }

  generateRandomImage(){
    this.photoService.fetchRandomImage().subscribe(fetchedImage => {
      this.randomImage = fetchedImage;
      this.photoService.loader.next(false);
    })
  }
}
