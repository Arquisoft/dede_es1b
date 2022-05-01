import MenuBar from "../menuBar";
import Container from '@mui/material/Container';
import ProductoPedido from '../../components/pago/ProductoPedido';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import "../../components/pago/pago.css";
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField} from "@mui/material";
import {addPedido, getAddressesFromPod, getGastosEnvio} from "../../api/api";
import {useEffect, useState} from "react";
import { Direccion } from "../../shared/shareddtypes";
import { LoginButton, useSession } from "@inrupt/solid-ui-react";
import React from "react";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

function Direcciones(): JSX.Element {

    const navigate = useNavigate();
    const {session} = useSession();
    const [direccionElegida,setDireccionElegida] = useState<String>();

    function cargarDirecciones() {
    let di = sessionStorage.getItem("direcciones")!;
    console.log("di   ",di);

    var result = [] as Direccion[];

    var direccionesSplit = di.split("$");
    console.log("direcciones split   ",direccionesSplit);
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

    return (
      <Container>
     {/*  {
        direcciones.map((direc: Direccion) => {
            return (
               <p>{direc.calle}   {direc.ciudad}</p>
            )
        })
    } */}
    <FormControl >
    <FormLabel id="demo-controlled-radio-buttons-group">Seleccione una dirección:</FormLabel>
    <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={direccionElegida}
        onChange={(e)=>{
          setDireccionElegida(e.target.value)
          console.log("lili",direccionElegida);
        }}
      >

          {direcciones.map((radioItem: Direccion) => (
            <FormControlLabel value={radioItem.calle +" - " +radioItem.cod_postal} control={<Radio />} label={radioItem.calle +" - " +radioItem.cod_postal} />
          ))}
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default Direcciones;