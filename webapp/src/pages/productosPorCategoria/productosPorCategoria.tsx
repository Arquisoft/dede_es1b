import { useEffect, useState } from 'react';
import Productos from '../../components/Productos';
import { getProductosPorCategoria } from '../../api/api';
import { Producto,ProductoPago } from '../../shared/shareddtypes';
import MenuBar from "../menuBar";
import {useParams} from "react-router-dom";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Carrito from '../../components/carrito/Carrito';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { ShoppingCart } from '@mui/icons-material';
import "./productosPorCategoria.css";

function ListaProductos(): JSX.Element {

  const[productos, setProductos] = useState<ProductoPago[]>([])
  const {categoria} = useParams();

  let cat:string =categoria!; 

  async function cargar() {
    setProductos(await getProductosPorCategoria(cat));
  }

  useEffect( () => {
    cargar();
  }, [])
  
  const [carritoAb, setCarritoAb] = useState(false);
  const [carrito, setCarrito] = useState([] as ProductoPago[]);

  const getTotalItems = (items: ProductoPago[]) => 
        items.reduce((accum: number, prod) => accum + prod.cantidad, 0);

  const handleAñadirAlCarrito = (prod: ProductoPago) => {
    setCarrito(prev => {
        const prodAñadido = prev.find(p => p.id === prod.id)
        if (prodAñadido) {
            return prev.map(p => (
                p.id === prod.id ? {
                    ...p, cantidad: p.cantidad + 1
                } : p
            ));
        }
        return [...prev, {...prod, cantidad: 1}];
    });
  };
  const handleEliminarDelCarrito = (id: string) => {
    setCarrito(prev => (
        prev.reduce((accum, p) => {
            if (p.id === id) {
                if (p.cantidad === 1) {
                    return accum;
                }
                return [...accum, {...p, cantidad: p.cantidad - 1}];
            } else {
                return [...accum, p];
            }
        }, [] as ProductoPago[])
    ));
  };

  return (
      
    <div className="productos-container" >
      <MenuBar/>
      <h1>AsturShop</h1>
      <SwipeableDrawer anchor="right" open={carritoAb} onOpen={() => setCarritoAb(true)} onClose={() => setCarritoAb(false)}>
          <Carrito 
              carrito={carrito} 
              añadirProd={handleAñadirAlCarrito}
              eliminarProd={handleEliminarDelCarrito} 
          />
      </SwipeableDrawer>
      <Productos productos={productos} handleAñadirAlCarrito={handleAñadirAlCarrito} />
      <IconButton className="botonCarrito" onClick={() => setCarritoAb(true)}>
          <Badge badgeContent={getTotalItems(carrito)} color="success">
              <ShoppingCart className="botonCarrito" style={{maxWidth: '70px', maxHeight: '70px', minWidth: '50px', minHeight: '50px'}}/>
          </Badge>            
      </IconButton>
    </div>
  )
}

export default ListaProductos;