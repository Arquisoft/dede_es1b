import request, {Response} from 'supertest';
import express, { Application } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import productRouter from '../productos/routerProductos';
import userRouter from '../usuarios/routerUsuario';
import api from '../api';

let app:Application;
let server:http.Server;

beforeAll(async () => {
    app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000']
    };
    app.use(cors(options));
    app.use(bp.json());
    app.use("/api", api)
    app.use("/products",productRouter)

    server = app.listen(port, ():void => {
        console.log('Restapi server for testing listening on '+ port);
    }).on("error",(error:Error)=>{
        console.error('Error occured: ' + error.message);
    });
});

afterAll(async () => {
    server.close() //close the server
})

describe('user ', () => {
    /**
     * Test that we can list products without any error.
     */
    it('podemos sacar una lista de productos',async () => {
        const response:Response = await request(app).get('/products/list');
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe("application/json");
    });
    /**
     * Test that we can list products without any error.
     */
    it('podemos sacar una lista de productos de una categoria',async () => {
        let categ="comida";
        const response:Response = await request(app).post('/products/catalogo').send({categoria:categ});
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe("application/json");
    });
    it('podemos sacar una lista de usuarios',async () => {
        const response:Response = await request(app).get('/Usuarios/list');
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe("application/json");
    });
    /**
     * Test that we can list products without any error.
     */
    it('podemos logearnos',async () => {
        let usuario1:String="admin";
        let contrasenia1:String="admin";
        const response:Response = await request(app).post('/usuarios/login').send({usuario:usuario1,contraseña:contrasenia1});
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe("application/json");
    });
    it('podemos añadir un usuario',async () => {
        let nombre:String="Juan";
        let apellidos="Dominguez";
        let usuario1="usuarioPrueba";
        let contraseña1="nosec";
        let correo1="micorreo.es";
        const response:Response = await request(app).post('/usuarios/add').send({nombre:nombre,apellidos:apellidos,usuario:usuario1,contraseña:contraseña1,correo:correo1});
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe("application/json");
    });


});