import AdminAppBar from '../../menuBarAdmin';
import './gestionProductos.css';
import {useNavigate} from 'react-router-dom';

function GestionProductos(props:any): JSX.Element {
    
    const navigate = useNavigate();
    

      return (

            <><AdminAppBar></AdminAppBar>
            <h1>GESTIÓN PRODUCTOS</h1>

                <table className="tablaBotones">
                <tr>
                <button className="button-48" data-testid='boton-añadir-producto'  onClick={() => navigate("/productos/add")}><span className="text">
                    <strong>Añadir producto</strong>
                </span></button>
                </tr>

                <tr>

                <button className="button-48"  data-testid='boton-listar-producto'  onClick={() => navigate("/productos/list")}><span className="text">

                    <strong>Listado</strong>
                </span></button>
                </tr>
                </table>

            </>
 
        );
    } 
export default GestionProductos;