import { useEffect, useState } from 'react';
import Productos from '../../components/Productos';
import Carrito from '../../components/carrito/Carrito';
import MenuBar from "../menuBar";
import { Producto } from '../../shared/shareddtypes';
import { getProductos} from '../../api/api';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import "./homepage.css";

function Init(): JSX.Element {

    const [productos, setProductos] = useState<Producto[]>([]);
    

    async function cargar() {
        setProductos(await getProductos());
    }

    useEffect( () => {
        cargar();
    }, [])

    return (
    <div className="homepage-container">
        <div className="encabezado">
            <MenuBar/>
            <h1>AsturShop</h1>
            <Productos productos={productos} />
            <div className="pruebaProductosCarrito">
                <Carrito />
            </div>
            <SwipeableDrawer anchor="right" open={carritoAb} onOpen={() => setCarritoAb(true)} onClose={() => setCarritoAb(false)}>
                CARRITO
            </SwipeableDrawer>
        ºº</div>
    </div>
    );
}

export const [carritoAb, setCarritoAb] = useState(false);
export const [carrito, setCarrito] = useState([] as Producto[]);
export const getTotalItems = (items: Producto[]) => null;

export default Init;