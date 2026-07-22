interface Cliente {
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    dataNascimento: string;

    cep: string;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;

    senha: string;
}

const formulario = document.querySelector("#formDados") as HTMLFormElement;

const nome = document.querySelector('[name="dadoNome"]') as HTMLInputElement;
const cpf = document.querySelector('[name="dadoCpf"]') as HTMLInputElement;
const email = document.querySelector('[name="dadoEmail"]') as HTMLInputElement;
const telefone = document.querySelector('[name="dadoTelefone"]') as HTMLInputElement;
const nascimento = document.querySelector('[name="dadoNascimento"]') as HTMLInputElement;

const cep = document.querySelector("#cep") as HTMLInputElement;
const rua = document.querySelector("#logradouro") as HTMLInputElement;
const numero = document.querySelector('[name="numero"]') as HTMLInputElement;
const bairro = document.querySelector("#bairro") as HTMLInputElement;
const cidade = document.querySelector("#cidade") as HTMLInputElement;
const estado = document.querySelector("#estado") as HTMLSelectElement;

const senha = document.querySelector('[type="password"]') as HTMLInputElement;

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const cliente: Cliente = {

        nome: nome.value,
        cpf: cpf.value,
        email: email.value,
        telefone: telefone.value,
        dataNascimento: nascimento.value,

        cep: cep.value,
        rua: rua.value,
        numero: Number(numero.value),
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,

        senha: senha.value

    };

    console.log(cliente);

});

const botaoCep = document.querySelector("#btnBuscarCep") as HTMLButtonElement;

botaoCep.addEventListener("click", buscarCep);

async function buscarCep() {

    const resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);

    const endereco = await resposta.json();

    rua.value = endereco.logradouro;
    bairro.value = endereco.bairro;
    cidade.value = endereco.localidade;
    estado.value = endereco.uf;

}

if (
    nome.value === "" ||
    cpf.value === "" ||
    email.value === "" ||
    senha.value === ""
) {
    alert("Preencha todos os campos obrigatórios.");
    return;
}