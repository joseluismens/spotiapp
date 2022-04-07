import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

  }
  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAeCkgjOu5FdksSxV6ZZAadfxtmWj8afNXg4yKoF4kgZLt6rJNpO-OG4eWHIW87RaPyt3w92B0ViDp4T78'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
     
  }
}
