import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl:
  './calculadora.component.html',
  styleUrl:
  './calculadora.component.css'
  })

  
export class CalculadoraComponent {
  numeros1: number = 0
  numeros2: number = 0;
  resultado: number = 0;

  somar(){
    this.resultado = this.numeros1 + this.numeros2
    console.log(this.resultado);
  }
  subtrair() {
    this.resultado = this.numeros1 - this.numeros2;
    console.log(this.resultado);
  }
   multiplicar() {
    this.resultado = this.numeros1 * this.numeros2;
    console.log(this.resultado);
  }
   dividir() {
    this.resultado = this.numeros1 / this.numeros2;
    console.log(this.resultado);
  }

  }

  
