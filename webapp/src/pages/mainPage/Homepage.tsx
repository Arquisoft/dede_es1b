import "./homepage.css";
import ListaProductos from './ListaProductos';
import MenuBar from "../menuBar";

function Init(): JSX.Element {


    return (
        <div className="encabezado">
            <MenuBar/>
            <h1>AsturShop</h1>
            <ListaProductos/>
        </div>
    );
}

export default Init;