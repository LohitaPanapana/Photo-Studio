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
    regular: string
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
  headers = {
    Authorization: 'Client-ID dAjUfYvDJW7oDWsq41VCIUdmh2a7ucoy97Qe1alAIgw'
  };

  constructor(private http: HttpClient) { }

  searchImage(term: string){
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
    return this.http.get<ImageDetails>(this.baseUrl + '/photos/random', {
      headers: this.headers
    });
  }
}
