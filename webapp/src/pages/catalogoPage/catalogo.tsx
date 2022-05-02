import "./catalogo.css";
import {useNavigate} from "react-router-dom";
import MenuBar from "../menuBar";
import "./catalogo.css";
import Divider from '@mui/material/Divider';

function Catalogo(): JSX.Element {

  const navigate = useNavigate();

  const imgRopa = "https://res.cloudinary.com/dlix47jlq/image/upload/v1650910847/categorias/categoriaRopa_jkmzbq.png";
  const imgComida = "https://res.cloudinary.com/dlix47jlq/image/upload/v1650910839/categorias/fabadaIcono_plspt9.png";
  const imgAdorno = "https://res.cloudinary.com/dlix47jlq/image/upload/v1650910848/categorias/categoriaAdornos_b4inge.png";

  return (
    <>
    
    
    <MenuBar></MenuBar>
    <h1>CATÁLOGO</h1>
    <div className="container">
   
      <div className='content'>
      <table className="tabla-categorias">

    <tr>
    <td>

      <div className="box">
        <button className='categoryButton'data-testid='boton-ropa' onClick={() => navigate('/catalogo/ropa')} >
        <img src={imgRopa} width="250" height="250" alt="logo" /> 
        <Divider className='divider' style={{ background: 'black' }}/>
        <span className='categorySpan'>ROPA</span>
        </button>
    </div>
    </td>

    <td>
    <div className="box">
    <button className='categoryButton'data-testid='boton-comida' onClick={() => navigate('/catalogo/comida')}>
    <img src={imgComida} width="250" height="250" alt="logo" /> 
    <Divider className='divider' style={{ background: 'black' }}/>
        <span className='categorySpan'>COMIDA</span>

        </button>
    </div>
    </td>

    <td>
    <div className="box">
    <button className='categoryButton'data-testid='boton-souvenirs' onClick={() => navigate('/catalogo/recuerdo')}>
    <img src={imgAdorno} width="250" height="250" alt="logo" /> 
    <Divider className='divider' style={{ background: 'black' }}/>
        <span className='categorySpan'>SOUVENIRS</span>
        </button>
    </div>
    </td>

    </tr>
    </table>
    </div>

    </div>
      
    </>
  );
}


 export default Catalogo;

