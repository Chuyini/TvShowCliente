import { Component} from '@angular/core';
import { RouterOutlet} from '@angular/router';

import { ImageComponent } from '../../componentes/image/image.component';
import { ShowListComponent } from '../../componentes/show-list/show-list.component';
import { Show } from '../../interfaces/show.interface';
import { ControllsComponent } from '../../componentes/controlls/controlls.component';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-tvShows',
  standalone: true,
  imports: [RouterOutlet,ImageComponent,ControllsComponent,ShowListComponent,],//componente dentro de otro
  templateUrl: './tv-show-p.page.html',
  styleUrl: './tv-show-p.page.css'
})
export class TvShowPPage {
  public revertir: boolean=false;

  //vamos a usar el servicio aqui para obtener las peliculas:

  //primero inyectamos

  constructor(private tvShowsService:TvShowsService){
    this.tvShowsService.fetchTvShows();//hacemos la peticion una vez creada
  }

 
  
  

  

  //ponemos hasta abajo el get

  public get TvShows():Show[]{
    return (this.tvShowsService.TvShows);
  }


}
