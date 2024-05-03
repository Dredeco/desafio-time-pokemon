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
9) Clique no database, depois na pasta public e clique no botão criar tabela
10) A tabela irá conter 5 colunas com os dados:
   - id: Int
   - name: Text
   - image: Text
   - url: Text
   - types: JSONB

11) Marque id para ser a chave primária ( Primary Key )
     

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

### comandos docker

Para interromper a execução digite:

```
docker compose down
```

Build da imagem com a tag/nome (vite-react-app)
```
- docker build -t vite-react-app:latest .
```

Filtrar e exibir informações sobre imagens Docker que tenham "vite-react-app" em seu nome.
```
- docker images | grep vite-react-app
```

Rodando docker
```
- docker run -p 3000:3000 vite-react-app:latest
```