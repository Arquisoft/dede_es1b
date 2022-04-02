import { Producto } from '../shared/shareddtypes';
import CardProducto from '../pages/mainPage/CardProducto';
import "../pages/mainPage/homepage.css";

type ProductosProps = {
    productos: Producto[];
}

const Productos = (props: ProductosProps) => {

    const handleAddToCart = (prod: Producto) => null;

    return (
        <div className="productos">
            {
                props.productos.map(
                    (prod: Producto) => {
                        return (
                            <CardProducto key={prod.id} producto={prod} handleAddToCart={handleAddToCart} />
                        )
                    }
                )
            }
        </div>
    )
}

export default Productos;