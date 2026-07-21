# Objeto literal

é uma forma simples e direta de criar um objeto na programação
o valor é delimitado pelas chaves {} e o valor dentro delas é separado cada propriedade por vírgula
ele consegue agrupar dados e comportamentos em uma única estrutura sem precisar de classe ou da palavra chave

um objeto tem seus valores, tipo: 
MONITOR: marca, modelo, ano de fabricação e descrição.
## Como criar um objeto literal?

###### Como vai ser utilizado seu objeto?
Interface e Type

`Interface` : é usada principalmente para definir formato de objetos e classes.

`Type`: também pode definir um objeto, mas é mais versátil.

###### Escolha um nome para o objeto
```ts
interface moto
```

###### Abra a chave para criar o objeto

```ts
interface moto = {

}
```
###### Adicione as propriedades e seus valores
```ts
interface moto = {
    marca: "Honda",
    modelo: "Twister",
    ano: 2025
}
```
## Como chamar os métods criados?

**Notação de ponto** : `moto.modelo` 
* Retorna `Twister`

**Notação de colchetes** : `moto["ano"]`
* Retorna `2026`

## Como alterar os valores do objeto?
Para fazer a alteração dos valores voce tem que dizer para o seu código qual objeto quer mudar e qual a propriedade que vai ser mudada:

```js
    moto.marca = "Yamaha"
    moto.modelo = "Fazer"
```
E agora o objeto está assim:

```js
const moto = {
    marca: "Yamaha",
    modelo: "Fazer",
    ano: 2025,
}
```

## Como adicionar novas propriedades? 

###### No javaScript pode ser adicionado a qualquer momento
No javaScript pode ser adicionado uma propriedade ao objeto a qaulquer momento:
```js
moto.kmRodado: 11.000
```

Já no typeScript tem que a propriedade tem que ser declarada antes :

```ts
interface moto = {
    marca: "Honda",
    modelo: "Twister",
    ano: 2025,
    kmRodado: 11.000
}
```

# Classe

## O que é (Programação Orientada a Objetos)POO ?? BUHHH
