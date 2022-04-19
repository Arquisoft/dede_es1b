import React from "react";
import { Producto } from '../../../../shared/shareddtypes';
import {addProduct} from '../../../../api/api';
import {useNavigate} from 'react-router-dom';
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import { margin } from "@mui/system";

type Prod={
  name:String,
  precio:Number,
  descripcion:String,
  tipo:String ,
  imagen:String,
  nventas:number,
  estado:Boolean
}

function FinalStep(props:any) {
  const navigate = useNavigate();

 var producto:Prod={
    name:localStorage.getItem("nombreNuevoProd")!,
    precio:parseInt(localStorage.getItem("precioNuevoProd")!),
    imagen:"fabada.png",
    tipo:localStorage.getItem("categoriaNuevoProd")!,
    descripcion:localStorage.getItem("descripcionNuevoProd")!,
    nventas:0,
    estado:true
 }

 let imagen: string = require("../../../../images/" + producto.imagen);

  const handleSubmit =async () => {
    const result = await addProduct(producto);
    console.log(producto.name);
    console.log(producto.precio);

    if (result){
      navigate('/productos/list');
    }
   
  }
  return (
    
    <div style={{ textAlign: "left" }}>
    <Card sx={{ width: 345, maxHeight: 490 } }>
          <CardMedia className="foto" 
             component="img"
             height="140"
             image={imagen}
             alt="green iguana"
           />
          <CardContent className="text">
            <Typography variant="h6" component="div">
              {producto.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" color="text.secondary">
              {producto.tipo}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                {producto.descripcion}
            </Typography>
            <Typography variant="h6" color="blue">
                {producto.precio + " €"}
            </Typography>
          </CardContent>
         
        </Card>
        <br></br><br></br><br></br>
      <Divider color='black'></Divider>

      <button className="añadirProdButton" data-testid="prev" onClick={props.prev}>
				Prev
			</button>
			<button className="añadirProdButton"  onClick={handleSubmit}>
				Guardar
			</button>

    </div>
  );
}

export default FinalStep;
