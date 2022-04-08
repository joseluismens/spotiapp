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
      'Authorization':'Bearer BQBTyvg1RAkDMMmcTrQS7CLF4IaFfW9n812V8G5Tvu26c3ONfMJjowThs8ksNx60xwnHv2I6VE94j8q76hw'
    });

    return this.http.get(url,{headers});

  }
  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data:any)=> data.albums.items));
     
  }

  getArtistas(termino:string){

     
    return this.getQuery(`search?q=${termino}&type=artist&limit=30`)
      .pipe(map((data:any)=>data.artists.items));
     
  }
  getArtista(id:string){

     
    return this.getQuery(`artists/${id}`)
      //.pipe(map((data:any)=>data.artists.items));
     
  }
  getTopsTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=es`)
      .pipe(map((data:any)=>data.tracks));
  }
}
