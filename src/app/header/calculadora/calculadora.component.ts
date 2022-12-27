import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  resultado: number = 0;
  element = false;


  operacion(num1: string, num2: string, operador:String){

    if(operador=='+'){
      this.resultado = Number(num1) + Number(num2);
    }else if(operador=="-"){
      this.resultado = Number(num1) - Number(num2);
    }else if(operador=="*"){
      this.resultado = Number(num1) * Number(num2);
    }else{
      this.resultado = Number(num1) / Number(num2);
    }

    return (this.element = true);

    

  }
}
