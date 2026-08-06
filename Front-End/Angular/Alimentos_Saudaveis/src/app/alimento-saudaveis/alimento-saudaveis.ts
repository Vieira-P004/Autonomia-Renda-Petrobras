import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alimento } from './item';

@Component({
  selector: 'app-alimento-saudaveis',
  imports: [FormsModule],
  templateUrl: './alimento-saudaveis.html',
  styleUrl: './alimento-saudaveis.css',
})

export class AlimentoSaudaveis {
  nomeProduto: string = 'valor';
  valorProduto: number = 0.0;

  listaAlimentos: Alimento[] = []

  addProduto(){
    let alimento = new Alimento()
    alimento.idProduto = this.listaAlimentos.length + 1;
    alimento.nomeProduto = this.nomeProduto;
    alimento.valorUnitario = this.valorProduto;

    this.listaAlimentos.push(alimento)

    this.nomeProduto = ''
    this.valorProduto = 0.0
  }

  limparTela(){
    this.listaAlimentos = []
  }
}
