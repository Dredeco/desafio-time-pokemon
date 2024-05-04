# 🚀 Desafio Bean Software

Este desafio tem como objetivo construir uma Pokedex em um ambiente Docker. Para consumir as informações, foram utilizadas as tecnologias Axios, Hasura com GraphQL e o banco de dados Postgres.

## 💻 Executando projeto

- Necessário ter o docker instalado na sua máquina.
  
Na raiz do projeto execute o comando:

```
docker compose up -d
```
### Hasura GraphQL

- Necessário configurar o Hasura com GraphQL para salvar os pokemons no banco postgres, siga esses passos:

#### Conexão Hasura com Postgres

1) Abra uma nova aba e digite

```
http://localhost:8080/console
```
2) Dentro do console clique na guia DATA
3) Clique no botão Connect Database
4) Escolha o banco Postgres e clique em Connect Existing Database
5) em "Database name" digite:

```
pokemon
```

6) em "Connect Database via" marque : "Environment variable"
7) Digite no campo "Environment variable":

```
HASURA_GRAPHQL_METADATA_DATABASE_URL
```

8) Clique em Connect Database
9) Clique no database, depois na pasta "public" e clique no botão "Create Table"
   - Nome da tabela: pokemons
10) A tabela irá conter 5 colunas com os dados:
   - id: Int
   - name: Text
   - image: Text
   - url: Text
   - types: JSONB

11) Marque id para ser a chave primária ( Primary Key )

12) Clique em "Add Table" para finalizar a configuração.

### Comandos docker

1) Abra do CMD e navegue até a pasta do **desafio-time-pokemon**. Uma vez dentro da pasta, execute os comandos abaixo.

Build da imagem com a tag/nome (vite-react-app)
```
docker build -t vite-react-app:latest .
```

Rodando a imagem com o Docker
```
docker run -p 3000:3000 vite-react-app:latest
```

Para interromper a execução digite:
```
docker compose down
```

### Comandos vite

Para rodar o servidor de desenvolvimento com Vite:
```
npm run dev
```

Para construir o projeto para produção:
```
npm run build
```

Para visualizar a aplicação com um servidor de visualização do Vite:
```
npm run preview
```

## 🛠️ Tecnologias

- ViteJS
- React
- Sass
- Apollo
- Docker
- Hasura
- GraphQL
- Postgres 

## 🎮 PokeAPI
- https://pokeapi.co/api/v2/pokemon/?limit=151

## 📄 Documentação docker
- https://hasura.io/docs/latest/getting-started/docker-simple/