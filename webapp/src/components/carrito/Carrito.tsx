import { Producto } from '../../shared/shareddtypes';
import ProductoCarrito from './ProductoCarrito';
import "./carrito.css";

type CarritoProps = {
  carrito: Producto[];
  añadirProd: (prod: Producto) => void;
  eliminarProd: (id: string) => void;
}

const Carrito = (props: CarritoProps) => {

  const calcularTotal = (productos: Producto[]) => 
    productos.reduce((accum: number, p) => accum + p.cantidad * p.precio, 0);

  return (
    <div className="carrito" >
      <h2>Carrito de la compra</h2>
      {props.carrito.length === 0 ? <p>El carrito está vacío</p>: null}
      <div className="productosCarrito">
        {props.carrito.map(p => (
          <ProductoCarrito 
              key={p.id} 
              producto={p} 
              añadirProd={props.añadirProd}
              eliminarProd={props.eliminarProd}
          />
        ))}
        <h2>Total: {calcularTotal(props.carrito).toFixed(2)} €</h2>
      </div>
    </div>
  )
}

export default Carrito;