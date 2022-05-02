import AdminAppBar from '../../menuBarAdmin';
import {useNavigate} from 'react-router-dom';

function GestionPedidos(props:any): JSX.Element {
    
    const navigate = useNavigate();
    

      return (

            <><AdminAppBar></AdminAppBar>
            <h1>GESTIÓN PEDIDOS</h1>

                <table className="tablaBotones">
                <tr>
                <button className="button-48" role="button"  onClick={() => navigate("/gestionPedidos/listado")}><span className="text">
                    <strong>Listado</strong>
                </span></button>
                </tr>

                <tr>
                <button className="button-48" role="button" onClick={() => navigate("/gestionPedidos/listadoPorUsuario")}><span className="text">
                    <strong>Pedidos por usuario</strong>
                </span></button>
                </tr>

             
                </table>

            </>
 
        );
    } 
export default GestionPedidos;