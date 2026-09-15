# Movies Control SQL

Aplicação web para controle e visualização de filmes e séries.

O projeto foi desenvolvido utilizando React no frontend, Node.js e Express no backend, e MySQL para armazenamento dos dados.

## Tecnologias utilizadas

### Frontend

- React 18
- JavaScript
- Materialize CSS
- Fetch API

### Backend

- Node.js
- Express
- CORS
- Nodemon

### Banco de dados

- MySQL
- SQL

## Funcionalidades

- Consulta de filmes e séries cadastrados no banco de dados
- Exibição dos registros em uma tabela
- Identificação do tipo de conteúdo como filme ou série
- Exibição do número total de episódios
- Exibição do episódio atual
- Exibição da data da última visualização
- Comunicação entre frontend e backend através de API HTTP

## Estrutura do projeto

```text
movies-controll-SQL/
├── backend/
│   ├── database/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieList.jsx
│   │   │   ├── App.js
│   │   │   └── index.js
│   └── package.json
│
├── Readme.md
└── teste.js