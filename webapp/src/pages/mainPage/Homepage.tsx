import { useEffect, useState } from 'react';
import Productos from '../../components/Productos';
import Carrito from '../../components/carrito/Carrito';
import MenuBar from "../menuBar";
import { Producto } from '../../shared/shareddtypes';
import { getProductos} from '../../api/api';
import "./homepage.css";

function Init(): JSX.Element {

    const[productos, setProductos] = useState<Producto[]>([])

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
            <div className='productos'>
                <Productos productos={productos} />
            </div>
            <div className="pruebaProductosCarrito">
                <Carrito />
            </div>
        ºº</div>
    </div>
    );
}

export default Init;