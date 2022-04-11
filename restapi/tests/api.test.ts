import request, {Response} from 'supertest';
import express, { Application } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';
import apiUsuario from '../usuarios/routerUsuario';
let app:Application;
let server:http.Server;
const mongoose = require('mongoose');
const connectString = 'mongodb+srv://uo277646:ADMSIS123$@databasepasturianosy.pzy6r.mongodb.net/dataBase1?retryWrites=true&w=majority';
beforeAll(async () => {
    app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000']
    };
    app.use(cors(options));
    app.use(bp.json());
    //app.use("/api", api)
    app.use(apiUsuario);
    

    server = app.listen(port, ():void => {
        console.log('Restapi server for testing listening on '+ port);
    }).on("error",(error:Error)=>{
        console.error('Error occured: ' + error.message);
    });
    mongoose.connect(connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
});

afterAll(async () => {
    server.close() //close the server
    mongoose.connection.close();
})

describe('usuarios', () => {
    /**
     * Test listar usuarios sin error
     */
    it('can be listed',async () => {
        const response:Response = await request(app).get("/usuarios/list");
        expect(response.statusCode).toBe(200);
    });
    /**
     * Test loguear un usuario sin error
     */
    it('can get a user',async () => {
        const response:Response = await request(app).post('/usuarios/login').send({
            usuario:"useruser",
            contraseña: "useruser"
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });
    /**
     * Test loguear un usuario con error
     */
    it('can get a user',async () => {
        const response:Response = await request(app).post('/usuarios/login').send({
            usuario:"useruser",
            contraseña: "fail"
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(404);
    });
    /**
     * Test de creación de usuario   
     */ 
    it('create correctly', async () => {
        let usuario:string = 'prueba123';
        let nombre:string = 'prueba123';
        let surname:string = 'prueba123';
        let correo:string = 'prueba123@email.com';
        let contraseña:string = "prueba123";
        const response:Response = await request(app).post('/usuarios/add').send({usuario: usuario,correo: correo,contrasenia: contraseña,name: nombre,surname:surname}).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);

    });

    
});