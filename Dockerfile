# Primeira Etapa (BUILD_IMAGE):
# imagem node
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/desafio-time-pokemon

# copiando package.json
COPY package.json .

# instalando todos os pacotes
RUN npm install

# copinado os arquivos restantes
COPY . .

# build projeto
RUN npm run build

# Segunda Etapa (PRODUCTION_IMAGE)
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/desafio-time-pokemon

# copiando dist
COPY --from=BUILD_IMAGE /app/desafio-time-pokemon/dist/ /app/desafio-time-pokemon/dist/
EXPOSE 8082

# copiando package.json
COPY package.json .
COPY vite.config.ts .

# instalando typescript
RUN npm install typescript

CMD [ "npm", "run", "preview" ]