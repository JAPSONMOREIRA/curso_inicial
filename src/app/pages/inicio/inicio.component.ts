import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre = "Japson";
apellido = "Moreira";
loadingVisible = false;

constructor(private ruta: Router){

}

visualizarLoading(){
  this.loadingVisible = true;
  setTimeout(() => {
    this.loadingVisible = false;
  }, 2000);
}

irPaginaTabla(){
  this.ruta.navigate(['tabla'])
}


}


