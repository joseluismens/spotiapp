import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error:boolean;
  mensaje:string='';
  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error=false;
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => { this.nuevasCanciones = data; this.loading = false },
      (error:any)=>{
        console.log(error);
        this.error=true;
        this.loading=false;
        this.mensaje = error.error.error.message;
        console.log(this.mensaje);
        
        
      })

  }

  ngOnInit(): void {
  }

}
