import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  public contador: number=30;

  public TvShows:Show[] =[];

  public TvShowDetail: Show[] = [
    {
      title:"string",
    year:23,
    episodes:34,
    image:"string",
    id:2,
      
    }];

  public idT: number=0;
  constructor(private http: HttpClient) {

    
  }
  //donde sea que inyectemos y llamemos esas acciones, va repercutir en las variables donde esten 
  //inyectodos los servicios
  public incrementa()
  {
    this.contador++;
  }
  public decrementa(){
    this.contador--;
  }
  public setAllAs(value: boolean):void{ //este valor cambiará segun el hijo

    this.TvShows.forEach(item=>item.isSelected=value);
     
     console.log("Accion desde el servicio");
   }
   
   
 
  public Invert():void
  {
    this.TvShows=this.TvShows.reverse();
    
  }
  public searchByTerm(value:string): void //aqui se hace la búsqueda con el value de la lista
  {
   //this.TvShows=this.TvShows.filter(item=>item.title.toLocaleUpperCase().includes(value.toLocaleUpperCase())); //pasamos a ambos en mayusculas y minisculas para evitar que sea mas flexible y no sea tan estrcito con las mayusculas o min
    this.fetchTvShows(value);
  }
  
  public fetchTvShows(searchTerm=""):void{

    this.http.get("http://localhost:8080/api/tvshows?searchTerm="+searchTerm).subscribe({

      next:(response:any)=>{//Lo ponemos de tipo any porque "no sabemos" que nos va a entregar el servidor
        //Que vamos a ejecutar una vez que se pueda resolver completamente la peticion
        this.TvShows=response.result;
        
      },
      error:(error:any)=>{
        //Que vamos a ejecutar si hubo cualquier tipo de error
        //Nada nos asegura que todo va a funcionar, el servidor puede
        //no funcionar o estar apagado, i nternet incluso
        console.log(error);
      },

    })
  }

  public uploadShow(nombre: string, episodios: string, anio: number, id: number, imagen: string): void {
    if (!nombre || !episodios || !anio || !id) {
        console.log("Datos inconclusos o incorrectos");
        return;
    }
    
    this.http.post("http://localhost:8080/api/tvshows", {
      "title": nombre,
      "year":anio,
      "episodes":episodios,
      "image":imagen,
      "id":id,
    }).subscribe({
        next: (response: any) => {
            console.log("Petición realizada con éxito:", response);
            // Realizar acciones adicionales si es necesario
        },
        error: (error: any) => {
            console.error("Error al realizar la petición:", error);
            // Manejar el error de ser necesario
        }
    });
}


  public update(nombre: string, episodios: string, anio: number, id: number, imagen: string):void{

    this.http.put("http://localhost:8080/api/tvshows/"+id, {
      "title": nombre,
      "year":anio,
      "episodes":episodios,
      "image":imagen,
      "id":id,
    }).subscribe({
        next: (response: any) => {
            console.log("Petición realizada con éxito:", response);
            // Realizar acciones adicionales si es necesario
        },
        error: (error: any) => {
            console.error("Error al realizar la petición:", error);
            // Manejar el error de ser necesario
        }
    });


  }
  public fetchTvShowByParameterSegmentId(id:number):any{

    
    this.http.get("http://localhost:8080/api/tvshows/"+id).subscribe({

    next:(response:any)=>{
      this.TvShowDetail=response.result;
      console.log(this.TvShowDetail);
      return(this.TvShowDetail);
    },
    error:(error:any)=>{
      console.log(error);

    }


  });
  }

  public deleteShow( id: number):void{

    this.http.delete("http://localhost:8080/api/tvshows/"+id).subscribe({
        next: (response: any) => {
            console.log("Petición realizada con éxito:", response);
            // Realizar acciones adicionales si es necesario
        },
        error: (error: any) => {
            console.error("Error al realizar la petición:", error);
            // Manejar el error de ser necesario
        }
    });


  }

  

  
  




}
