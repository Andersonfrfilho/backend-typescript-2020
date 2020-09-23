# nome da imagem
FROM node:lts-alpine
# define o diretorio de destino
WORKDIR /usr/app
# copiar arquivos para o diretorio . <- o workDIR
COPY package*.json /usr/app
# rode o comando npm install
RUN npm install
# RUN pwd
# RUN ls -la
# # copia o src depois . <- tudoq ue esta na pasta . <- diretorio do workdir
COPY . .
# # liberar a ´porta 1º porta do computador / porta do docker
EXPOSE 3333
# # CMD comandos que serão rodados
# CMD ["npm","run","dev:nodemon"]
# para montar a imagem rodar o comando docker build -t image-docker-backend-typescript .


 
# ADD . .
 
# ENV NODE_ENV=production
 
# RUN npm ci
 
# USER node
 
# EXPOSE 8080
 
# CMD [ "node", "build/index.js" ]


