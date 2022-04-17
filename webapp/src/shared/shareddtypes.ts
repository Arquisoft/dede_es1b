export type User = {
    id:string
    name:string;
    surname:string;
    usuario:string;
    correo:string;
    password:string;
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

export type Producto = {
    id: string;
    name: string;
    precio: number;
    imagen: string;
    tipo: string;
    descripcion: string;
    cantidad: number;
}

export type Prod = {
  name: String;
  precio: Number;
  imagen: String;
  tipo: String;
  descripcion: String;
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