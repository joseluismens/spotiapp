import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

  }

  getQuery(query:string){
      const url = `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
      'Authorization':'Bearer BQDE9TZfl8u11efbJ9QrQaefXdSM0jwmpJyAz6CJWehSIau_skqYd4Tcg1QiMGt5HxZdBelzNuMl4mENzuw'
    });

    return this.http.get(url,{headers});

  }
  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data:any)=> data.albums.items));
     
  }

  getArtista(termino:string){

     
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
      .pipe(map((data:any)=>data.artists.items));
     
  }
}
