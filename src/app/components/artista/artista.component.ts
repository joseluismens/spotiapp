import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  
  artista :any={};
  loading:boolean;
  tracks:any={};
  constructor(private router:ActivatedRoute, private spotifyService:SpotifyService
  ) { 
        this.loading=true;

    this.router.params.subscribe(
      (params:any)=>{
       console.log(params);
       this.getArtista(params.id);
       this.getTopsTracks(params.id);
      }
    )
  }

  ngOnInit(): void {
  }
  getArtista(id:string){
        this.loading=true;

    this.spotifyService.getArtista(id).subscribe(artista=>{
      console.log(artista);
      this.artista = artista;
      this.loading=false;
    })
  }

  getTopsTracks(id:string){
    this.spotifyService.getTopsTracks(id).subscribe(
      (tracks)=>{
        this.tracks=tracks;
        console.log(tracks);
      }
      )
  }

}
