export type User = {
    id:string
    webid:string;
  }

  export type Producto = {
    id: string;
    name: string;
    precio: number;
    imagen: string;
    tipo: string;
    descripcion: string;
    cantidad: number;
    nventas:number;
    estado:Boolean;
}






export type Prod = {
  name: String;
  precio: Number;
  imagen: String;
  tipo: String;
  descripcion: String;
  nventas:number;
  estado:Boolean;
}


export type Direccion = {
  calle: string;
  cod_postal: string;
  ciudad: string;
  region: string;
}



export type Carrito = {
    id: string;
    id_usuario: string;
    precio: number;
    listaProductos: [{
      producto: {
        id_p: string;
        cantidad: number;
      }
    }];
}
export type Pedido = {
    id:string,
    id_usuario:String,
    listaProductos:[{
        producto: [{
            id_p: String,
            cantidad:Number
        }]
    }],
    direccionAsignada:String,
    precioTotal:Number,
    estado:String,
}