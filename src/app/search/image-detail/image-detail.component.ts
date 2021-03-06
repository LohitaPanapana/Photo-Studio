import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/service/photo.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  imageDetails$;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.imageDetails$ = this.photoService.selectedImage;
  }

}
