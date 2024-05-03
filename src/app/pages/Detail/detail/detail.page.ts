import { Component } from '@angular/core';
import { TvShowsService } from '../../../services/tv-shows.service';
import { Show } from '../../../interfaces/show.interface';
import { ShowListComponent } from '../../../componentes/show-list/show-list.component';
import { ControllsComponent } from '../../../componentes/controlls/controlls.component';
import { ImageComponent } from '../../../componentes/image/image.component';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ShowListComponent,RouterOutlet,ImageComponent,ControllsComponent,NgFor],
  templateUrl: './detail.page.html',
  styleUrl: './detail.page.css'
})
export class DetailPage {

 
  public detail:Show[]=[];
  constructor(private tvShowsService:TvShowsService){
  }

 ngOnInit(): void {
    // Asignar la variable TvShowDetail a la variable detail
    
   
    this.detail=this.tvShowsService.fetchTvShowByParameterSegmentId(this.tvShowsService.idT);
  
    console.log( this.tvShowsService.idT);


  }
  
 
 
  

}
