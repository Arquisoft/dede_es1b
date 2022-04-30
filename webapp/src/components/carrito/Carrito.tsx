import { Producto,ProductoPago } from '../../shared/shareddtypes';
import ProductoCarrito from './ProductoCarrito';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import "./carrito.css";
import { LoginButton, SessionProvider, useSession } from '@inrupt/solid-ui-react';

type CarritoProps = {
  carrito: ProductoPago[];
  añadirProd: (prod: ProductoPago) => void;
  eliminarProd: (id: string) => void;
}

interface ILoginInputOptions {
  oidcIssuer?: string;
  redirectUrl?: string;
  clientId?: string;
  clientSecret?: string;
  clientName?: string;
  handleRedirect?: (redirectUrl: string) => unknown;
  tokenType?: "DPoP" | "Bearer";
  refreshToken?: string;
}

const modal: ILoginInputOptions = {
  oidcIssuer: "https://inrupt.net/",
  redirectUrl: "http://localhost:3000/pago",
  clientName : "Solid Todo App"
};

const Carrito = (props: CarritoProps) => {

  const navigate = useNavigate();

  const calcularTotal = (productos: ProductoPago[]) => 
    productos.reduce((accum: number, p) => accum + p.cantidad * p.precio, 0);
  
  let vacio = props.carrito.length === 0;
    
  const saveCarrito = (items: ProductoPago[]) => {
      let result: string = "";
      items.forEach((i) => {result = result + i.name + "-" + i.imagen + "-" + JSON.stringify(i.precio) +
          "-" + JSON.stringify(i.cantidad) + ";"});
      console.log(result);
      localStorage.setItem("carrito", result);
      return result;
  };

  const { session } = useSession();
    const authOptions = {
        clientName: "Solid Todo App",
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
            if(session.info.isLoggedIn){
              saveCarrito(props.carrito);

            localStorage.setItem("carrito", JSON.stringify(props.carrito));
            navigate("/pago");
            }
            else{
              //obligar a iniciar sesion
              session.login(modal);
              
             }
          }}
      >
        Pagar
      </Button>
    </div>
  )
}

export default Carrito;