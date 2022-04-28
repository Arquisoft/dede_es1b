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
}
export type Prod = {
  name: String;
  precio: Number;
  imagen: String;
  tipo: String;
  descripcion: String;
}

export type Direccion = {
  calle: String;
  cod_postal: Number;
  ciudad: String;
  pais: String;
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