import { Producto } from '../shared/shareddtypes';
import CardProducto from '../pages/mainPage/CardProducto';
import "./Productos.css";

type ProductosProps = {
    productos: Producto[];
}

const Productos = (props: ProductosProps) => {
    return (
        <div className="productos">
            {
                props.productos.map(
                    (prod: Producto) => {
                        return (
                        <CardProducto producto={prod} />
                        )
                    }
                )
            }
        </div>
    )
}

export default Productos;