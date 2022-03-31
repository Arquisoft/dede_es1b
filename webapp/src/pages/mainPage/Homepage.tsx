import ListaProductos from './ListaProductos';
import MenuBar from "../menuBar";
import Slider from "./Slider";
import "./homepage.css";

function Init(): JSX.Element {

    return (
    <div className="homepage-container">
        <div className="encabezado">
            <MenuBar/>
            <h1>AsturShop</h1>
        </div>
        <h2>Productos descatados</h2>
        <div className="slider">
            <Slider />
        </div>
        <div className="productos">
            <ListaProductos />
        </div>
    </div>
    );
}

export default Init;