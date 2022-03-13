import CardProducto from './CardProducto';
import { Producto } from '../api/modelo/producto';
import "./ListaProductos.css";

type ListaProductosProps = {
    products?: Producto[];
}

function ListaProductos(props: ListaProductosProps) {

    let product1: Producto = {
        id : "IDPRODUCT",
        nombre : "Producto1",
        precio : 35,
        imagen : "prod1",
        categoria : "producto",
        descripcion : "ProductoDescripcion"
      };
      let product2: Producto = {
        id : "IDPRODUCT",
        nombre : "Producto2",
        precio : 50,
        imagen : "prod2",
        categoria : "producto",
        descripcion : "ProductoDescripcionB"
      };
      let product3: Producto = {
        id : "IDPRODUCT",
        nombre : "Producto3",
        precio : 5,
        imagen : "prod3",
        categoria : "producto",
        descripcion : "ProductoDescripcionC"
      };

      let products = [
          {product1},
          {product2},
          {product3}
      ];
    return (
        <div className="lista">
            <CardProducto producto={product1}></CardProducto>
            <CardProducto producto={product2}></CardProducto>
            <CardProducto producto={product3}></CardProducto>
            <CardProducto producto={product2}></CardProducto>
            <CardProducto producto={product1}></CardProducto>
        </div>
    );
}

export default ListaProductos;