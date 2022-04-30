import { ProductoPago } from '../shared/shareddtypes';
import CardProducto from '../pages/mainPage/CardProducto';
import "../pages/mainPage/homepage.css";

type ProductosProps = {
    productos: ProductoPago[];
    handleAñadirAlCarrito: (prod: ProductoPago) => void;
}

const Productos = (props: ProductosProps) => {

    return (
        <div className="productos">
            {
                props.productos.map(
                    (prod: ProductoPago) => {
                        return (
                            <CardProducto key={prod.id} producto={prod} handleAñadirAlCarrito={props.handleAñadirAlCarrito} />
                        )
                    }
                )
            }
        </div>
    )
}

export default Productos;