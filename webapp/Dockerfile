FROM node:16.13.1
LABEL org.opencontainers.image.source https://github.com/Arquisoft/dede_es1b
COPY . /app
WORKDIR /app
#Install the dependencies
RUN npm install

#Create an optimized version of the webapp
ARG API_URI="https://dede-es1b-restapi.herokuapp.com"
ENV REACT_APP_API_URI=$API_URI
RUN npm run build

#Ver como podemos llamar npm run prod aquí
CMD [ "npm", "run", "prod" ]