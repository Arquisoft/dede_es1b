import routerPedido from "./pedidos/routerPedido";

require("dotenv").config();
import express, { Application, RequestHandler } from "express";
import cors from 'cors';
import bp from 'body-parser';
import promBundle from 'express-prom-bundle';
import api from "./api"; 
import routerUsuario from "./usuarios/routerUsuario";
import routerProducto from "./productos/routerProductos";




const mongoose = require("mongoose");
const conectionString =process.env.URI_MONGO;


const app: Application = express();
var port= process.env.PORT || 5000;



const options: cors.CorsOptions = {
  origin: ['http://localhost:3000','https://dede-es1b.herokuapp.com']
};

const metricsMiddleware:RequestHandler = promBundle({includeMethod: true});
app.use(metricsMiddleware);


app.use(cors(options));
app.use(bp.json());

//app.use("/api", api)
app.use(routerUsuario);
app.use(routerProducto);
app.use(routerPedido);

app.listen( port, ():void => {
  
  console.log('Restapi listening on '+ port);
}).on("error",(error:Error)=>{
    console.error('Error occured: ' + error.message);
});

mongoose.connect(conectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then(() => {
  console.log("Database connected");
})
.catch((err: Error) => {
  console.error(err);
});


