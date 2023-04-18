import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IDataEmpleado } from 'src/app/interfaces/EmpleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements  OnInit{

  listEmpleado: IDataEmpleado[] = [];
  columnTabla: any;
  listMenu: MenuItem[] = [];
  activeItem!: MenuItem;

  constructor(private ruta: Router, 
              private empleadoService: EmpleadoService){

  }
  ngOnInit(): void {
    console.log('hola estoy aqui')
    this.iniColumnaTabla();
    this.inicioMenu();
    /* this.empleadoService.getAllEmployee().subscribe(
       (res) =>{
        console.log(res)
        this.listEmpleado = res.data;
       }, (error)=>{
        console.log('Ha ocurrido un error')
       }

    ); */

    this.empleadoService.getAllEmployee().subscribe(
      {
        next: (datos) =>{
          console.log(datos)
          this.listEmpleado = datos.data;
        },
        error: (err)=>{
          console.log('ERROR')
        }
      }
    )
  }

  iniColumnaTabla(){
    this.columnTabla = [
      {
        field: 'id', Header: 'ID'
      },
      {
        field: 'name', Header: 'NOMBRE EMPLEADO'
      },
      {
        field: 'salary', Header: 'SALARIO EMPLEADO'
      },
      {
        field: 'edad', Header: 'EDAD'
      }

    ];

  }

  inicioMenu(){
    this.listMenu = [
      {label: 'Prueba'},
      {label: 'PruebaDos'},
      {label: 'PruebaTres'}

    ];
    this.activeItem = this.listMenu[0];
  }


  regresarInicio(){
    this.ruta.navigate(['inicio'])
  }

}
