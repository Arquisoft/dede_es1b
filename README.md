<p align="center">
  <img alt="logo" src="https://res.cloudinary.com/dlix47jlq/image/upload/v1650910768/iconos/logoAsturShop_i41dwr.png" width="200">
</p>

<h1 align="center">
    AsturShop
</h1>

[![CI for ASW2122](https://github.com/Arquisoft/dede_es1b/actions/workflows/asw2122.yml/badge.svg)](https://github.com/Arquisoft/dede_es1b/actions/workflows/asw2122.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_dede_es1b&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_dede_es1b)
[![codecov](https://codecov.io/gh/Arquisoft/dede_es1b/branch/main/graph/badge.svg?token=DKT4h5szve)](https://codecov.io/gh/Arquisoft/dede_es1b)

**AsturShop** offers you the possibility of buying **high-quality** products from Asturias, no matter from which part of the world!

## dede_es1b
Click here to access the web application from any browser or device.
- Technical documentation
- [Architectural decisions](https://github.com/Arquisoft/dede_es1b/blob/master/architecturalDecisions/Decisiones_arquitectonicas.pdf)
- Demo showing the shop's features
- Slides of the project's presentation

## Team Members
<ul>
  <li>Lucía García Sopeña (uo271080)</li>
  <li>Sergio Salgueiro Monforte (uo276843)</li>
  <li>Héctor Lavandeira Fernández (uo277303)</li>
  <li>Juan Domínguez Álvarez (uo277646)</li>
  <li>María González Otero (uo270235)</li>
</ul>

<p float="left">
<img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" height="100">
<img src="https://miro.medium.com/max/1200/0*RbmfNyhuBb8G3LWh.png" height="100">
<img src="https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png" height="100">
</p>

This project is a basic example of website using **React** with **Typescript** and an endpoint using **NodeJS** with **express**.

## Quick start guide
<mark>In case you already have node.js and npm, make sure you update them before attempting to build the images</mark>

If you want to execute the project you will need [git](https://git-scm.com/downloads), [Node.js and npm](https://www.npmjs.com/get-npm) and [Docker](https://docs.docker.com/get-docker/). Make sure the three of them are installed in your system. Download the project with `git clone https://github.com/Arquisoft/dede_es1b`. The fastest way to launch everything is with docker:
```bash
docker-compose up --build
```
This will create two docker images as they don't exist in your system (the webapp and the restapi) and launch a mongo container database. It will also launch Prometheus and Grafana containers to monitor the webservice. You should be able to access everything from here:
 - [Webapp - http://localhost:3000](http://localhost:3000)
 - [RestApi example call - http://localhost:5000/api/users/list](http://localhost:5000/api/users/list)
 - [RestApi raw metrics - http://localhost:5000/metrics](http://localhost:5000/metrics)
 - [Prometheus server - http://localhost:9090](http://localhost:9090)
 - [Grafana server http://localhost:9091](http://localhost:9091)
 
If you want to run it without docker. Compile and run the restapi:
```shell
cd restapi
npm install
npm start
```

Now the webapp:

```shell
cd webapp
npm install
npm start
```

You should be able to access the application in [http://localhost:3000](http://localhost:3000).

## More information
You can get more information about the respository in the other README files:
- Documentation: https://github.com/arquisoft/dede_es1b/tree/master/docs
- Webapp: https://github.com/arquisoft/dede_es1b/tree/master/webapp
- Restapi: https://github.com/arquisoft/dede_es1b/tree/master/restapi
