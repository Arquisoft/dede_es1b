import "./bienvenidaPage.css";
import {useNavigate} from "react-router-dom";


function Bienvenida(): JSX.Element {


  const navigate = useNavigate();
  localStorage.setItem("token","");

  return (
    <>

          <h1>Bienvenido a AsturShop</h1>

          <br></br> <br></br> <br></br> <br></br> <br></br>

         <a className="boton"  data-testid='boton-empezar'  onClick={() => navigate("/inicio")}  >Empezar</a
         >
     
    </>
  );
}

 export default Bienvenida;

