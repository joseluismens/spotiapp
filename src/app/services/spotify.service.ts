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
      'Authorization':'Bearer BQDu4vWCVnX5sGPR_SCbPdKzF9fNjFpMIzD6bEsbSCpocIrksWRksV3b2t8BNznMdv_gFnYrylhJ30OzwhA'
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
}
