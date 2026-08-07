import { Component } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa-service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  idPessoaEdit = 0
  nome = ''
  email = ''
  cpf = ''
  dataNascimento = ''
  edit = false

  constructor(private route: ActivatedRoute,private pessoaService: PessoaService) { }

  limparAtributos(){
    this.nome = ''
    this.email = ''
    this.cpf = ''
    this.dataNascimento = ''
  }

  carregarAtributos(pessoa: Pessoa){
    this.nome = String(pessoa.nome)
    this.email = String(pessoa.email)
    this.cpf = String(pessoa.cpf)
    this.dataNascimento = String(pessoa.dataNascimento)
  }

  //PESQUISAR MAIS SOBRE
  ngOnInit(){
    const idPessoa = this.route.snapshot.paramMap.get('id')

    this.idPessoaEdit = Number(idPessoa)

    if(idPessoa){
      this.edit = true

      this.pessoaService.buscarPorId(Number(idPessoa)).subscribe(objPessoa => {
        if(objPessoa){
          this.carregarAtributos({...objPessoa})
        }
      })
    }
  }

  salvar() {
    const pessoa = new Pessoa()
    pessoa.nome = this.nome
    pessoa.email = this.email
    pessoa.cpf = this.cpf
    pessoa.dataNascimento = this.dataNascimento

    if(this.edit){
      pessoa.id = this.idPessoaEdit
      this.pessoaService.editar(pessoa)
      this.edit = false
    }else{
      pessoa.id = this.pessoaService.tamanhoArray() +1 //gerando id

      this.pessoaService.adicionar(pessoa)
    }

    this.limparAtributos()
  }

  alterar(pessoa: Pessoa){
    if(confirm("Tem certeza que deseja Excluir essa pessoa?")){
      this.pessoaService.editar(pessoa)
    }
  }

}
