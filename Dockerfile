# Essa imagem pode ser conferida em docker image ls
FROM node:9.2.0-alpine

# Uma descrição
LABEL mainteiner 'Eduardo Esteves'

# Home directory for Node-RED application source code.
RUN mkdir -p /home/app

# Variavel de ambiente apontando para a pasta do aplicativo na image
ENV APP=/home/app

# Add react user so we aren't running as root.
#RUN adduser -h "${APP}/contacts" -D -H react \
  #&& chown -R react:react ${APP}/* 

RUN npm install -g npm@5.5.1 \
  npm install -g create-react-app \
  create-react-app contacts
# package.json contains create-react-app NPM module and node dependencies
# COPY package.json ${APP}/contacts
#RUN chown -R react:react ${APP}/* 


#USER react


# Instala todas as dependencias e concatena criando o app contacts
# RUN create-react-app contacts
  #creat-react-app contacts

# Diretório padrão onde comandos fora do container irão executar
WORKDIR "${APP}/contacts"

# Expõe uma porta qualquer para acesso externo
VOLUME ["${APP}/contacts"]
EXPOSE 8000

RUN cd "${APP}/contacts"


#USER root

#COPY ./* ${APP}/contacts
#RUN chown -R react:react ${APP}/*

CMD ["yarn", "start"]