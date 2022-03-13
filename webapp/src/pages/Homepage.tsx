import "./homepage.css";
import ListaProductos from '../components/ListaProductos';

function Init(): JSX.Element {


    return (
        <div className="encabezado">
            <h1>AsturShop</h1>
            <ListaProductos/>
        </div>
    );
}

export default Init;