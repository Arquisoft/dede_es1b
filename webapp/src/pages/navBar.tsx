import "./homepage.css";
import {useNavigate} from 'react-router-dom';

function NavMenu(): JSX.Element {
    const navigate = useNavigate();


    return (
        <div className="navbar">
           
        <a className="active" onClick={() => navigate("/inicio")}><i className="fa fa-fw fa-home"></i> Home</a>
        <a  onClick={() => navigate("/loggin")}><i className="fa fa-fw fa-search"></i> Loggin</a>
        <a  onClick={() => navigate("/registro")}><i className="fa fa-fw fa-envelope"></i> Registro</a>
        <a  onClick={() => navigate("/")}><i className="fa fa-fw fa-user"></i> Bienvenida</a>
         </div>
    );
}

export default NavMenu;

