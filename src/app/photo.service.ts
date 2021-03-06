import { clientID } from './credential';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface SearchImageResponse {
  results: ImageDetails[]
}

export interface ImageDetails{
  id?: string;
  created_at?: string;
  color?: string;
  alt_description?: string;
  description?: string;
  likes?: number,
  links?: {
    downloads: string
  },
  urls?: {
    regular: string,
    small: string
  },
  user?: {
    bio: string, 
    name: string, 
    location: string, 
    links: {
      portfolio: string,
      photos: string
    }, 
    profile_image: {
      small: string
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseUrl = 'https://api.unsplash.com/';
  selectedImage = new BehaviorSubject<ImageDetails>({});
  loader = new BehaviorSubject<boolean>(false);
  headers = {
    Authorization: clientID
  };

  constructor(private http: HttpClient) { }

  searchImage(term: string){
    this.loader.next(true);
    return this.http.get<SearchImageResponse>(this.baseUrl + 'search/photos', {
      params: {
        query: term
      },
      headers: this.headers
    }).pipe(
      pluck('results')
    )
  }

  fetchRandomImage(){
    this.loader.next(true);
    return this.http.get<ImageDetails>(this.baseUrl + '/photos/random', {
      headers: this.headers
    });
  }
}
