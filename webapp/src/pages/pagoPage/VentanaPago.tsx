import MenuBar from "../menuBar";
import Container from '@mui/material/Container';
import ProductoPedido from '../../components/pago/ProductoPedido';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import "../../components/pago/pago.css";
import {addPedido, getGastosEnvio} from "../../api/api";
import {useEffect, useState} from "react";
import { Direccion, Producto } from "../../shared/shareddtypes";
import { useSession } from "@inrupt/solid-ui-react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const carritoLS: Producto[] = JSON.parse(localStorage.getItem("carrito") || "[]");

function VentanaPago(): JSX.Element {

    const navigate = useNavigate();
    const {session} = useSession();
    
    function cargarDirecciones() {
        let di = sessionStorage.getItem("direcciones")!;
    
        var result = [] as Direccion[];
    
        var direccionesSplit = di.split("$");

        direccionesSplit.forEach((direc) => {
                var datosDireccion = direc.split(",");
                let direccion: Direccion = {
                    calle: datosDireccion[0],
                    ciudad: datosDireccion[1],
                    region: datosDireccion[2],
                    cod_postal: datosDireccion[3],
                }
                result.push(direccion);
            });
            result.pop();
            return result;
    
        };
          
    var direcciones = cargarDirecciones();
   
    var carrito = carritoLS;

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
    const [value, setValue] = useState('');

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
      };
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
                                    <ProductoPedido key={prod.id} nombre={prod.name} precio={prod.precio}
                                     cantidad={prod.cantidad} imagen={prod.imagen} 
                                    />
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

                            <Container>
                <FormControl >
                      <FormLabel id="demo-controlled-radio-buttons-group">Seleccione una dirección:</FormLabel>
                      <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleRadioChange}
                     >

                              {direcciones.map((radioItem: Direccion) => (
                                 <FormControlLabel value={radioItem.ciudad+" "+radioItem.calle +" " +radioItem.cod_postal} control={<Radio />} label={radioItem.calle +" - " +radioItem.cod_postal} />
                             ))}
                         </RadioGroup>
                   
                            <br></br>
                            <Button
                                className="buttonDireccion"
                                size="small"
                                disableElevation
                                variant="contained"
                                onClick={async () => {
                                    console.log("midire   ",value);
                                    setDireccion(value);
                                    calcularGastos();
                                }}
                            >
                                Confirmar dirección
                            </Button>
                            </FormControl>
                 </Container>
                            <br></br>
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

                                    addPedido(carrito,sessionStorage.getItem('idUser')!,Number.parseFloat(calcularTotalFinal()),direccion!);
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
}

export default VentanaPago;