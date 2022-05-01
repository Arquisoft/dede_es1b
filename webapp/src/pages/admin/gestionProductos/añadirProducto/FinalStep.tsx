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
import './FinalStep.css';

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
    imagen:localStorage.getItem("imagenNuevoProd")!,
    tipo:localStorage.getItem("categoriaNuevoProd")!,
    descripcion:localStorage.getItem("descripcionNuevoProd")!,
    nventas:0,
    estado:true
 }


  const handleSubmit =async () => {
    const result = await addProduct(producto);
    console.log(producto.name);
    console.log(producto.precio);

    if (result){
      navigate('/productos/list');
    }
   
  }
  return (
    
    <div className="finalStepAddProductContainer">
          <div className = "finalStepAddProductContent" style={{ textAlign: "left" }}>
    <Card sx={{ width: 345, maxHeight: 800} }>
           <CardMedia  
               component="img"
               height="400"
               image={""+producto.imagen}
               alt={"Imagen no cargada correctamente"}
               
          />
          <CardContent className="text">

            <Typography variant="h6" component="div">
              Nombre: {producto.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" color="text.secondary">
              Categoria: {producto.tipo}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
               Descripción:  {producto.descripcion}
            </Typography>
            <Typography variant="h6" color="blue">
               Precio: {producto.precio + " €"}
            </Typography>
          </CardContent>           <br></br>

      <Divider color='black'></Divider>
         <CardActions sx={{marginLeft:'5%'}}>
         <button className="añadirProdButton" data-testid="prev" onClick={props.prev}>
				Prev
			</button>
			<button className="añadirProdButton"  onClick={handleSubmit}>
				Guardar
			</button>
         </CardActions>
        </Card>
     
    </div>
    </div>

  );
}

export default FinalStep;