import ListaProductos from './ListaProductos';
import Carrito from '../../components/carrito/Carrito';
import MenuBar from "../menuBar";
import "./homepage.css";

function Init(): JSX.Element {


    return (
    <div className="homepage-container">
        <div className="encabezado">
            <MenuBar/>
            <h1>AsturShop</h1>
            <div className="productos">
                <ListaProductos />
            </div>
            <div className="pruebaProductosCarrito">
                <Carrito />
            </div>
        ºº</div>
    </div>
    );
}

export default Init;