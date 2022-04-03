import { Producto } from '../../shared/shareddtypes';
import ProductoCarrito from './ProductoCarrito';
import "./carrito.css";

type CarritoProps = {
  carrito: Producto[];
  añadirProd: (prod: Producto) => void;
  eliminarProd: (id: string) => void;
}

const Carrito = (props: CarritoProps) => {

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
      </div>
    </div>
  )
}

export default Carrito;