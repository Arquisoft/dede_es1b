import { Producto } from '../../shared/shareddtypes';
import ProductoCarrito from './ProductoCarrito';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import "./carrito.css";

type CarritoProps = {
  carrito: Producto[];
  añadirProd: (prod: Producto) => void;
  eliminarProd: (id: string) => void;
}

const Carrito = (props: CarritoProps) => {

  const navigate = useNavigate();

  const calcularTotal = (productos: Producto[]) => 
    productos.reduce((accum: number, p) => accum + p.cantidad * p.precio, 0);
  
  let vacio = props.carrito.length === 0;
    
  const saveCarrito = (items: Producto[]) => {
      let result: string = "";
      items.forEach((i) => {result = result + i.name + "-" + i.id + "-" + i.imagen + "-" + JSON.stringify(i.precio) +
          "-" + JSON.stringify(i.cantidad) + ";"});
      console.log(result);
      localStorage.setItem("carrito", result);
      return result;
  };

  return (
    <div className="carrito" >
      <h2>Carrito de la compra</h2>
      {vacio ? <p>El carrito está vacío</p>: null}
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
      <Button
          size="large"
          disableElevation
          variant="contained"
          disabled={vacio}
          onClick={() => {
            saveCarrito(props.carrito);
            navigate("/pago");
          }}
      >
        Pagar
      </Button>
    </div>
  )
}

export default Carrito;