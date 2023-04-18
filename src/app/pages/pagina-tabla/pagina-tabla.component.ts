import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDataEmpleado } from 'src/app/interfaces/EmpleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements  OnInit{

  listEmpleado: IDataEmpleado[] = [];
  constructor(private ruta: Router, 
              private empleadoService: EmpleadoService){

  }
  ngOnInit(): void {
    console.log('hola estoy aqui')

    this.empleadoService.getAllEmployee().subscribe(
       (res) =>{
        console.log(res)
        this.listEmpleado = res.data;
       }, (error)=>{
        console.log('Ha ocurrido un error')
       }

    );
  }

 

  regresarInicio(){
    this.ruta.navigate(['inicio'])
  }

}
