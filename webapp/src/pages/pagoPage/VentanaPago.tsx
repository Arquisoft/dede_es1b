import MenuBar from "../menuBar";
import Container from '@mui/material/Container';
import ProductoPedido from '../../components/pago/ProductoPedido';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import "../../components/pago/pago.css";

type ProductoParaPedido = {
    nombre: string;
    imagen: string;
    precio: number;
    cantidad: number;
};

function VentanaPago(): JSX.Element {

    const navigate = useNavigate();

    const getCarrito = (data: string) => {
        var result = [] as ProductoParaPedido[];
        var productos = data.split(";");
        productos.forEach((p) => {
            var datosProd = p.split("-");
            let prod: ProductoParaPedido = {
                nombre: datosProd[0],
                imagen: datosProd[1],
                precio: Number(datosProd[2]),
                cantidad: parseInt(datosProd[3]),
            }
            result.push(prod);
        });
        result.pop();
        return result;
    };

    let carritoData: string = localStorage.getItem("carrito")!;
    var carrito = getCarrito(carritoData);

    const calcularTotal = (productos: ProductoParaPedido[]) => {
        return productos.reduce((accum: number, p) => accum + p.cantidad * p.precio, 0);
    }

    let totalProductos: number = calcularTotal(carrito);

    return (
        <div>
            <MenuBar />
            <h1>Detalles del pedido</h1>
            <div className="pedido">
                <Container className="productosPedido">
                    <div className="prods">
                        {
                            carrito.map((prod: ProductoParaPedido) => {
                                return (
                                    <ProductoPedido nombre={prod.nombre} imagen={prod.imagen} precio={prod.precio}
                                        cantidad={prod.cantidad} />
                                )
                            })
                        }
                    </div>
                </Container>
                <Container className="datosPedido">
                    <Card>
                        <CardContent>
                            <Typography variant="h4">
                                {"Detalles"}
                            </Typography>
                            <br></br>
                            <Typography variant="body1">
                                {"Total del pedido: " + totalProductos + " €"}
                            </Typography>
                            <Typography variant="body1">
                                {"Gastos de envío: "}
                            </Typography>
                            <br></br>
                            <Typography variant="h5">
                                {"Total a pagar: " + totalProductos + " €"}
                            </Typography>
                        </CardContent>
                        <div className="button">
                            <Button
                                size="large"
                                disableElevation
                                variant="contained"
                                onClick={() => navigate("/pago/finalizado")}
                            >
                                Confirmar pago
                            </Button>
                        </div>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default VentanaPago;