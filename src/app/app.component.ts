import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ProyectoBaseB22';
  suma:number = 0;
  val3:number = 0;
  val4:number = 0;
  nombres:string = "";
  apellidos:string = "";


  multiplicacion:number = 0;
  arreglo: number[] = [];
  objeto:{ "nomb":string, "apell":string } = { "nomb" : "dato por defecto", "apell": "dato por defecto"};

  cambiarTitulo():void {
    this.title = 'Hola cómo están';
  }

  sumar(val1:string, val2:string):void {
    this.suma = Number(val1) + Number(val2);
  }

  multiplicar():void {
    this.multiplicacion = this.val3 * this.val4;
  }

  crearArreglo():void {
    this.arreglo.push(1);
  }    

  crearObjeto():void {
    this.objeto = {
      "nomb": this.nombres,
      "apell": this.apellidos
    }
  }

}
