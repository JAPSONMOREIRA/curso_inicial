import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IDataEmpleado } from 'src/app/interfaces/EmpleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements  OnInit{

  listEmpleado: IDataEmpleado[] = [];
  columnTabla: any;

  constructor(private ruta: Router, 
              private empleadoService: EmpleadoService,
              private mensaje: MessageService){

  }
  ngOnInit(): void {
    console.log('hola estoy aqui')
    this.iniColumnaTabla();
    
    this.empleadoService.getAllEmployee().subscribe(
      {
        next: (datos) =>{
          console.log(datos)
          this.listEmpleado = datos.data;
          this.mensaje.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });

        },
        error: (err)=>{
          console.log('ERROR')
          this.mensaje.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un problema' });

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

  regresarInicio(){
    this.ruta.navigate(['inicio'])
  }

}
