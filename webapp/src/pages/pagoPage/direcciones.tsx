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
import {addPedido, getAddressesFromPod, getGastosEnvio} from "../../api/api";
import {useEffect, useState} from "react";
import { ProductoPago, Direccion } from "../../shared/shareddtypes";
import { LoginButton, useSession } from "@inrupt/solid-ui-react";

function Direcciones(): JSX.Element {

    const navigate = useNavigate();
    const {session} = useSession();
    const [direcciones,setDirecciones] = useState<Direccion[]>();
    const [direccion,setDireccion] = useState<Direccion>();

    const cargarDirecciones = async () =>{
        return await getAddressesFromPod(session.info.webId!);
      }
      
    useEffect( () => {
        async function name() {
            setDirecciones(await cargarDirecciones());
        } 
        console.log(direcciones);

    }, [])


    return (
        <></>
    );
};

export default Direcciones;