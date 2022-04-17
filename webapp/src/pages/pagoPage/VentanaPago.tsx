import MenuBar from "../menuBar";
import Container from '@mui/material/Container';
import ProductoPedido from '../../components/pago/ProductoPedido';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import "../../components/pago/pago.css";
import {TextField} from "@mui/material";
import {addPedido, getGastosEnvio} from "../../api/api";
import {useEffect, useState} from "react";

export type ProductoParaPedido = {
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
    const [gastosEnv,setGastosEnv]=useState<number>();
    const cogerGastos=async ()=>{
        setGastosEnv(await getGastosEnvio());
    }
    useEffect(()=>{
        cogerGastos();
    },[]);
    function calcularTotalFinal(){
        if(gastosEnv){
            return (gastosEnv+calcularTotal(carrito)).toFixed(2);
        }else{
            return calcularTotal(carrito).toFixed(2);
        }
    }
    const calcularTotal = (productos: ProductoParaPedido[]) =>
        productos.reduce((accum: number, p) => accum + p.cantidad * p.precio, 0);

    let totalProductos: number = calcularTotal(carrito);

    // @ts-ignore
    // @ts-ignore
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
                                {"Total del pedido: " + totalProductos.toFixed(2) + " €"}
                            </Typography>
                            <TextField  className='textField'
                                        required
                                        name="direccion"
                                        label="password"
                                        variant="outlined"

                                        sx={{ my: 2 }}
                            />

                            <Typography variant="body1">
                                {"Gastos de envío: "+gastosEnv}
                            </Typography>
                            <br></br>
                            <Typography variant="h5">

                                {"Total a pagar: " + calcularTotalFinal() + " €"}
                            </Typography>
                        </CardContent>
                        <div className="button">
                            <Button
                                size="large"
                                disableElevation
                                variant="contained"
                                onClick={() => {addPedido(carrito,"dadad",Number.parseFloat(calcularTotalFinal()));
                                    navigate("/pago/finalizado");
                                }}
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