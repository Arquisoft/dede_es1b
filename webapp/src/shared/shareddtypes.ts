export type User = {
    name:string;
    surname:string;
    username:string;
    email:string;
    password:string;
  }

export type Producto = {
    id: string;
    name: string;
    precio: number;
    imagen: string;
    tipo: string;
    descripcion: string;
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