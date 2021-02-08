import { ParsedHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../photo.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.searchImage('beach').subscribe(data => console.log(data))
  }

}
