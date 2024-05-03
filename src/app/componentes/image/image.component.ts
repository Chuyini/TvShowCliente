import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
//En esta parte podemos declarar vaibles de la siguiente manera
//por lo predeterminadamente las variables tendrán un acceso público
//podemos cambiarlas solo definiendolas al principios;

public contador: Number= 22;//esta variable se la podemos pasar al html
Nombre: string= "Pagina works";//Tambien se le pueden pasar strings

imgSrc: string="https://picsum.photos/200/300";
imgAlt: string="Imagen random";


}
