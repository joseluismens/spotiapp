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
  
  constructor(private router:ActivatedRoute, private spotifyService:SpotifyService
  ) { 
    this.router.params.subscribe(
      (params:any)=>{
       console.log(params);
       this.getArtista(params.id);
      }
    )
  }

  ngOnInit(): void {
  }
  getArtista(id:string){
    this.spotifyService.getArtista(id).subscribe(artista=>{
      console.log(artista);
      
    })
  }

}
