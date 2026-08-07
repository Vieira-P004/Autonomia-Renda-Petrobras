import { Component } from '@angular/core';
import { PessoaService } from '../../services/pessoa-service';
import { Router } from '@angular/router';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})

export class Lista {

  constructor(private router: Router ,private pessoaService: PessoaService) { }

  listarPessoa(){
    return this.pessoaService.listar();
  }

  excluir(pObjPessoa: Pessoa){
    if(confirm("Tem certeza que deseja exclir a pessoa?")){
      this.pessoaService.excluir(Number(pObjPessoa.id))
    }

    this.listarPessoa()
  }

  buscarPorId(pObjPessoa: Pessoa){
    this.router.navigate(['/cadastro', pObjPessoa])
  }
}
