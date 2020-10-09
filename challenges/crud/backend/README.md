# Desafio: CRUD
[![Javascript Badge](https://img.shields.io/badge/-NodeJS-EFD81D?style=flat-square&logo=Nodejs&logoColor=444)]()
[![React Badge](https://img.shields.io/badge/-React-48CEF7?style=flat-square&logo=React&logoColor=111)]()
## **Descrição:**
O Nosso Sistema está impossibilitado de fazer novos Commits, alterar os que já existem, excluí-los ou até mesmo listá-los. Não podemos sequer criar uma nova branch pra dividir o sistema.
## **Objetivo:**
Implemente e altere o necessário para que seja possível criar (branches e commits), listar, editar e excluir. O funcionamento **deverá ser o seguinte:**



**Atualmente:**






## **Documentação de Referência:**
[Knex](http://knexjs.org/) (Query Builder para nosso SQLite3).<br />
[ExpressJS](https://expressjs.com/pt-br/4x/api.html)<br />
[NodeJS](https://nodejs.org/en/docs/)<br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Passos Iniciais

### `yarn install`

### `yarn start`

Requisições para [http://localhost:3004](http://localhost:3004)

## Utilizando Insomnia

O Insomnia é um cliente REST open source, através dele é possível fazer todos os tipo de requisições para testes.<br />
[Download Core](https://insomnia.rest/download/)

### Entendendo um pouquinho

#### Queries
Os Query Params são parâmetros nomeados enviados na rota após o "?", geralmente utilizados para filtros, paginações. Pode ser acessado pelo request.query.
##### Ex.:
http://localhost:3004/commits/?page=2

#### Params

Os Route Params são parâmetros utilizados para identificar recursos. Pode ser acessado pelo request.params.
##### Ex.:
http://localhost:3004/commits/1234

#### Body

O Request Body é usado quando você quer criar ou atualizar informações. São os dados que você deve enviar no corpo da requisição. Para acessar utilize request.body.


## O que precisa ser feito

Você precisará nos ajudar com pelo menos **uma funcionalidade.**<br />
Essas funcionalidades se referem aos arquivos `BranchController.js` e `CommitController.js` presentes em `src/controllers/`.<br />

As funções se referem ao tratamento das requisições de POST, GET, PUT e DELETE que o servidor poderá receber. As rotas serão criadas em `routes.js` presente em `src/`.<br />

Perceba a falta do código:<br />
![Desafio](https://raw.githubusercontent.com/CommitJr/Commit-Pull-Hackquest-2020/main/challenges/crud/back/public/ignore/Desafio_CRUD_Quebrado1.png)<br />
![Desafio](https://raw.githubusercontent.com/CommitJr/Commit-Pull-Hackquest-2020/main/challenges/crud/back/public/ignore/Desafio_CRUD_Quebrado2.png)<br />

E vc também precisará consertar as rotas de requisições no arquivo `routes.js`:<br />
![Desafio](https://raw.githubusercontent.com/CommitJr/Commit-Pull-Hackquest-2020/main/challenges/crud/back/public/ignore/Desafio_CRUD_Quebrado3.png)<br />

### Obrigado :) <3
