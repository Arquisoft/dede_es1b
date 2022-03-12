import { Producto } from "../api/modelo/producto";
import Button from '@mui/material/Button';

type ProdProps = {
    producto: Producto;
}

const Producto = (props: ProdProps) => {
    return (
        <div className="vista">
            <img className="imagen" src={props.producto.imagen}></img>
            <div className="propiedades">
                <div className="nombre">{props.producto.nombre}</div>
                <div className="precio">{props.producto.precio}</div>
            </div>
            <Button variant="contained">Añadir al carrito</Button>
        </div>
    )
}

export default Producto;