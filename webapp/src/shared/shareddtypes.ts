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
    estado:boolean;
}






export type Prod = {
  name: string;
  precio: number;
  imagen: string;
  tipo: string;
  descripcion: string;
  nventas:number;
  estado:boolean;
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
    id_usuario:string,
    listaProductos:[{
        producto: [{
            id_p: string,
            cantidad:number
        }]
    }],
    direccionAsignada:string,
    precioTotal:number,
    estado:string,
}