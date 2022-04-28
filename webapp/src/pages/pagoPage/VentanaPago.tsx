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
import { Producto } from "../../shared/shareddtypes";
import { LoginButton, useSession } from "@inrupt/solid-ui-react";

function VentanaPago(): JSX.Element {

    const navigate = useNavigate();

    
      
    const getCarrito = (data: string) => {
        var result = [] as Producto[];
        var productos = data.split(";");
        productos.forEach((p) => {
            var datosProd = p.split("-");
            let prod: Producto = {
                id: datosProd[0],
                name: datosProd[1],
                precio: Number(datosProd[2]),
                imagen: datosProd[3],
                tipo: datosProd[4],
                descripcion: datosProd[5],
                cantidad: parseInt(datosProd[6])
            }
            result.push(prod);
        });
        result.pop();
        return result;
    };

    let carritoData: string = localStorage.getItem("carrito")!;
    var carrito = getCarrito(carritoData);

    const [gastosEnv,setGastosEnv]=useState<number>();

    const calcularGastos = async() => {
        if (direccion === undefined) {
            setGastosEnv(0);
        } else {
            if (direccion.length > 0) {
                setGastosEnv(await getGastosEnvio(direccion));
            }
        }
    }

    useEffect(()=>{
        calcularGastos();
    },[]);

    function calcularTotalFinal(){
        if(gastosEnv){
            return (gastosEnv+calcularTotal(carrito)).toFixed(2);
        }else{
            return calcularTotal(carrito).toFixed(2);
        }
    }

    const calcularTotal = (productos: Producto[]) =>
        productos.reduce((accum: number, p) => accum + p.cantidad * p.precio, 0);


    let totalProductos: number = calcularTotal(carrito);

    const [direccion, setDireccion] = useState<string>();

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
                            carrito.map((prod: Producto) => {
                                return (
                                    <ProductoPedido key={prod.id} nombre={prod.name} imagen={prod.imagen} precio={prod.precio}
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
                            <TextField  className='textField'
                                        required
                                        name="direccion"
                                        label="Dirección"
                                        variant="outlined"
                                        onChange={e => { 
                                            setDireccion(e.target.value);
                                        }}
                                        sx={{ my: 2 }}
                            />
                            <Button
                                className="buttonDireccion"
                                size="small"
                                disableElevation
                                variant="contained"
                                onClick={() => {
                                    calcularGastos();
                                }}
                            >
                                Confirmar dirección
                            </Button>
                            <Typography variant="body1">
                                {"Total del pedido: " + totalProductos.toFixed(2) + " €"}
                            </Typography>
                            <Typography variant="body1">
                                {"Gastos de envío: " + gastosEnv + " €"}
                            </Typography>
                            <Typography variant="h5">
                                {"Total a pagar: " + calcularTotalFinal() + " €"}
                            </Typography>
                        </CardContent>
                        <div className="button">
                            <Button
                                size="large"
                                disableElevation
                                variant="contained"
                                onClick={() => {

                                    addPedido(carrito,localStorage.getItem('userId')!,Number.parseFloat(calcularTotalFinal()));
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