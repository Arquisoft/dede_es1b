import { Producto} from '../shared/shareddtypes';
import CardProducto from '../pages/mainPage/CardProducto';
import "../pages/mainPage/homepage.css";

type ProductosProps = {
    productos: Producto[];
    handleAĆ±adirAlCarrito: (prod: Producto) => void;
}

const Productos = (props: ProductosProps) => {

    return (
        <div className="productos">
            {
                props.productos.map(
                    (prod: Producto) => {
                        return (
                            <CardProducto key={prod.id} producto={prod} handleAĆ±adirAlCarrito={props.handleAĆ±adirAlCarrito} />
                        )
                    }
                )
            }
        </div>
    )
}

export default Productos;