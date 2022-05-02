import request, {Response} from 'supertest';
import express, { Application } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';
import apiUsuario from '../usuarios/routerUsuario';
import apiProducto from '../productos/routerProductos';
import apiPedido from '../pedidos/routerPedido';
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
    app.use(apiProducto);
    app.use(apiPedido)
    

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
        const response:Response = await request(app).post('/usuarios/inicioSesion').send({
            webid:"https://lorenzo123.inrupt.net/profile/card#me",
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
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
    

    /**
     * Test de borrar un usuario
     */
     it('delete an user',async () => {
        const response:Response = await request(app).post('/usuarios/delete').send({
            usuario:"prueba123",
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });
    /**
     * Test obtener un usuario por la webId
     */
     it('GET A USER BY WEB ID',async () => {
        const response:Response = await request(app).post('/usuarios/getId').send({
           
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });
    
    
});
describe('productos', () => {
     /**
     * Test listar productos sin error
     */
      it('can be listed',async () => {
        const response:Response = await request(app).get("/products/list");
        expect(response.statusCode).toBe(200);
    });
    /**
     * Test listar productos por categoría
     */
    it('get products with type',async () => {
        const response:Response = await request(app).post('/products/catalogo').send({
            tipo:'comida'
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });
    /**
     * Crear producto 
     */
    it('create product',async () => {
        let name:string = 'cachopo';
        let precio:number = 32;
        let descripcion:string = 'plato de carne';
        let tipo:string = 'ropa';
        let imagen:string = "aaaa";
        const response:Response = await request(app).post('/productos/add').send({name: name,precio: precio,descripcion: descripcion,tipo: tipo,imagen:imagen}).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);

    });
    /**
     * Test de borrar un producto
     */
     it('delete an product',async () => {
        const response:Response = await request(app).post('/productos/delete').send({
            _id:"622b81934557a8f7057d1917",
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });
   
    /**
     * Test de reactivar un producto
     */
    it('reactivar un producto',async () => {
        const response:Response = await request(app).post('/productos/reactivar').send({
            _id:"622b81934557a8f7057d1917",
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });
    /**
     * Test de ventas
     */
     it('numeroDeVentasDeUnProducto',async () => {
        const response:Response = await request(app).post('/productos/getNVentas').send({
            _id:"622b81934557a8f7057d1917",
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });
    /**
     * Test incrementar ventas
     */
     it('incrementarVentas',async () => {
        const response:Response = await request(app).post('/productos/incrementarVentas').send({
            _id:"622b81934557a8f7057d1917",
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });

    /**
     * Test archivos
     */
     it('ver archivos',async () => {
        const response:Response = await request(app).post('/productos/activos').send({
            
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(404);
    });
  
/**
     * Test categorias
     */
 it('ver categorias',async () => {
    const response:Response = await request(app).post('/productos/categorias').send({
    }).set('Accept', 'application/json');
    expect(response.statusCode).toBe(404);
});
    /**
     * Test get producto por id
     */
 it('ver producto por id',async () => {
    const response:Response = await request(app).post('/productos/getProductoPorId').send({
    }).set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
});

})

    describe('pedidos', () => {
        /**
     * Test listar pedidos sin error
     */
      it('can be listed',async () => {
        const response:Response = await request(app).get("/pedido/list");
        expect(response.statusCode).toBe(200);
    });
     /**
     * Test listar pedidos por usuario
     */
      it('get pedidos with type',async () => {
        const response:Response = await request(app).post('/pedido/encontrarPorUsuario').send({
            id_usuario:'prueba123'
        }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    });
  /**
     * Test crear pedido
     */
   it('create pedido',async () => {
    let id_usuario:string = '543535534';
    let direccionAsignada:string = "calle Dolores";
    let precioTotal:number = 32;
    let estado:string = 'prueba';
    
    const response:Response = await request(app).post('/pedido/crear').send({id_usuario: id_usuario,direccionAsignada: direccionAsignada,precioTotal: precioTotal,estado: estado})
    .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);

});
/**
 * Test gastos de envio
 */
 it('get gastos de envio',async () => {
    const response:Response = await request(app).post('/pedido/gastosEnvio').send({
        direcc:'Oviedo'
    }).set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
});


    });

