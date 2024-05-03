import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';//<-- aqui importamos el decorador Input
import { Show } from '../../interfaces/show.interface';
import { MovieComponent } from '../movie/movie.component';
import { ControllsComponent } from '../controlls/controlls.component';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [NgFor,NgIf,MovieComponent, NgClass, ControllsComponent],//<-- usamos la directiva para poder usar la funcion for
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {
  @Input()
  public TvShows : Show[]=[]; 
}
