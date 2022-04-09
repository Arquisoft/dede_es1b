import { Producto } from '../../shared/shareddtypes';
import MenuBar from "../menuBar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProductoPedido from '../../components/pago/ProductoPedido';
import "../../components/pago/pago.css";

function VentanaPago(): JSX.Element {

    return (
        <div>
            <MenuBar />
            <h1>Detalles del pedido</h1>
            <div className="prodsPedido">
                <Container maxWidth="sm">
                    <ProductoPedido nombre={"Producto"} precio={8} cantidad={6} imagen={"imagen"} />
                    <ProductoPedido nombre={"Prueba2"} precio={2} cantidad={4} imagen={"imagen"} />
                </Container>
            </div>
        </div>
    );
};

export default VentanaPago;