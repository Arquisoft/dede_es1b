import "./homepage.css";
import ListaProductos from './ListaProductos';
import MenuBar from "../menuBar";

function Init(): JSX.Element {


    return (
        <div className="encabezado">
            <MenuBar/>
            <h1>AsturShop</h1>
            <div className="productos">
                <ListaProductos />
            </div>
        </div>
    );
}

export default Init;