# Movies Control SQL

Aplicação web para controle e visualização de filmes e séries.

O projeto foi desenvolvido como prática de aprendizado, com base em videoaulas, utilizando React no frontend, Node.js e Express no backend, e MySQL para armazenamento dos dados.

## Tecnologias utilizadas

### Frontend

* React 18
* JavaScript
* Materialize CSS
* Fetch API

### Backend

* Node.js
* Express
* CORS
* Nodemon

### Banco de dados

* MySQL
* SQL

## Arquitetura

A aplicação utiliza uma arquitetura simples de integração entre frontend, backend e banco de dados:

```text
React
  ↓
API HTTP
  ↓
Node.js / Express
  ↓
MySQL
```

O frontend realiza requisições HTTP ao backend, que consulta os dados armazenados no MySQL e retorna as informações em formato JSON.

## Funcionalidades

* Consulta de filmes e séries cadastrados no banco de dados
* Exibição dos registros em uma tabela
* Identificação do tipo de conteúdo como filme ou série
* Exibição do número total de episódios
* Exibição do episódio atual
* Exibição da data da última visualização
* Comunicação entre frontend e backend através de API HTTP

## Estrutura do projeto

```text
movies-controll-SQL/
├── backend/
│   ├── database/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── Readme.md
└── teste.js
```

> O arquivo `.env` é utilizado localmente para armazenar as configurações de conexão com o banco de dados e não deve ser versionado.

## Como executar

### Backend

Entre na pasta `backend`:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com os dados de conexão do MySQL:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=moviescontrol_new
```

Inicie o servidor:

```bash
npm start
```

O backend será executado em:

```text
http://localhost:5000
```

### Frontend

Em outro terminal, entre na pasta `frontend`:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm start
```

O frontend será executado na porta 3000.

## API

O backend disponibiliza uma rota para consulta dos filmes e séries:

```text
GET /movies
```

A rota consulta os registros da tabela `movies` no MySQL e retorna os dados em formato JSON.

## Objetivo do projeto

Projeto desenvolvido como prática de integração entre frontend, backend e banco de dados relacional, utilizando React, Node.js, Express, SQL e MySQL.
