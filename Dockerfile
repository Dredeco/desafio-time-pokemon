# BUILD_IMAGE
FROM node:20
WORKDIR /app

COPY package*.json .
COPY vite.config.ts .

RUN npm install
COPY . .

RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "preview"]