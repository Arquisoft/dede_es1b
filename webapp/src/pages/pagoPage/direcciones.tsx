import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom';
import "../../components/pago/pago.css";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useState} from "react";
import { Direccion } from "../../shared/shareddtypes";
import { useSession } from "@inrupt/solid-ui-react";

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

    }
      
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
}

export default Direcciones;