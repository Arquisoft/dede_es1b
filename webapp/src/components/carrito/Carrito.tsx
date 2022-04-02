import { Producto } from '../../shared/shareddtypes';
import { useEffect, useState } from 'react';
import { getProductos} from '../../api/api';
import ProductoCarrito from './ProductoCarrito';

const Carrito = () => {
    
    const[productos, setProductos] = useState<Producto[]>([])

  async function cargar() {
    setProductos(await getProductos());
  }

  useEffect( () => {
    cargar();
  }, [])

  return (
    <div className="productos-container" >
        <div className="productos">
            {
                productos.map(
                    (prod: Producto) => {
                        return (
                        <ProductoCarrito producto={prod} />
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default Carrito;