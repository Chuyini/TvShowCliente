import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-controlls',
  standalone: true,
  imports: [FormsModule],//El forms module es para usar El ngModule
  templateUrl: './controlls.component.html',
  styleUrl: './controlls.component.css'
})
export class ControllsComponent {

  public invert: boolean=false;
  @Output()
  public setAllAs : EventEmitter<boolean> = new EventEmitter();//cambiamos de void a boolean porque es el tipo de valor que va a mandar

  @Output() massgeInvertToFather :EventEmitter<void>=new EventEmitter();//no necesita mandar  parámetro a la función del padre 
                                                                        //por lo tanto es void
  
  @Output()
  public onSearch: EventEmitter<string>= new EventEmitter();

  //inyectamos le servicio par apoder usarlo

  public constructor(private tvShowsServices:TvShowsService)
  {

  }

  public searchTerm:string="";//aqui se pone el nombre por el cual queremos filtrar la lista
  public nombre:string="";
  public imagen:string="";
  public episodios:string="";
  public anio:number=0;
  public Id:number=0;

  public OnSetAllAs():void//este valor lo va recibir desde el HTML
  {
    console.log("accion desde el hijo");
    this.tvShowsServices.setAllAs(true);
   // this.setAllAs.emit(value);//Y mandamos al padre la variable que usará
  }
  public OnUnSetAllAs():void
  {
    console.log("accion desde el hijo");
    this.tvShowsServices.setAllAs(false);//AQUI MANDAMOS LLAMAR AL SERVICIO
   // this.setAllAs.emit(value); Ya no lo ocupamos porque usamos servicios
  }
  public OnInvert(): void //Esta función será la que ejecute la función del padre que es la de invertir los elementos
  {

    //this.massgeInvertToFather.emit();
    this.tvShowsServices.Invert();
    

  }

 public OnClickSearch(): void{

  this.tvShowsServices.searchByTerm(this.searchTerm);

 // this.onSearch.emit(this.searchTerm); //ESTE YA NO LO OCUPAMOS PORQUE YA USAMOS SERVICIOS
  
  
  
 }

 public eliminar(){

    this.tvShowsServices.deleteShow(this.Id);
 }

 public actualizar(){
  this.tvShowsServices.update(this.nombre,this.episodios,this.anio,this.Id,this.imagen);
 }
 public subir(){

  this.tvShowsServices.uploadShow(this.nombre,this.episodios,this.anio,this.Id,this.imagen);
  
 }

}
