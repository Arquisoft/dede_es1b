import { Producto } from '../shared/shareddtypes';
import CardProducto from '../pages/mainPage/CardProducto';

type ProductosProps = {
    productos: Producto[];
}

const Productos = (props: ProductosProps) => {
    return (
        <div>
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