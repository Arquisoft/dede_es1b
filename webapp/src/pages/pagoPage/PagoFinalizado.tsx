import MenuBar from "../menuBar";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import "../../components/pago/pago.css";

function PagoFinalizado(): JSX.Element {

    const navigate = useNavigate();

    return (
        <div>
            <MenuBar />
            <h1>Pago finalizado</h1>
            <h3>¡Muchas gracias por su compra!</h3>
            <div className="button">
                <Button
                    size="large"
                    disableElevation
                    variant="contained"
                    onClick={() => navigate("/inicio")}
                >
                    Volver a la tienda
                </Button>
            </div>
        </div>
    );
};

export default PagoFinalizado;