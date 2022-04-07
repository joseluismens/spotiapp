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
      'Authorization':'Bearer BQALb2t4VwJcguGfGmsaJUg1ibALkuEdMSWMTJOYO3kgI27NpdrjuaU71yA7j9sZYyhwmuIct---rCD9k9I'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
     
  }
}
