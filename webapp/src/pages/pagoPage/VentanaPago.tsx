import { Producto } from '../../shared/shareddtypes';
import MenuBar from "../menuBar";
import Container from '@mui/material/Container';
import ProductoPedido from '../../components/pago/ProductoPedido';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import "../../components/pago/pago.css";

function VentanaPago(): JSX.Element {

    const navigate = useNavigate();

    return (
        <div>
            <MenuBar />
            <h1>Detalles del pedido</h1>
            <div className="pedido">
                <Container className="productosPedido">
                    <ProductoPedido nombre={"Producto"} precio={8} cantidad={6} imagen={"imagen"} />
                    <ProductoPedido nombre={"Prueba2"} precio={2} cantidad={4} imagen={"imagen"} />
                </Container>
                <Container className="datosPedido">
                    <Card>
                        <CardContent>
                            <Typography variant="h4">
                                {"Detalles"}
                            </Typography>
                            <br></br>
                            <Typography variant="body1">
                                {"Total del pedido: " + "PRECIO TOTAL"}
                            </Typography>
                            <Typography variant="body1">
                                {"Gastos de envío: "}
                            </Typography>
                            <br></br>
                            <Typography variant="h5">
                                {"Total a pagar: "}
                            </Typography>
                        </CardContent>
                        <Button
                            className="boton"
                            size="large"
                            disableElevation
                            variant="contained"
                            onClick={() => navigate("/pago/finalizado")}
                        >
                            Confirmar pago
                        </Button>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default VentanaPago;