import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Producto } from '../../shared/shareddtypes';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

type ProdProps = {
    producto: Producto;
}

function CardProducto(props: ProdProps) {

    let imagen: string = require("../../images/" + props.producto.imagen);
    const navigate = useNavigate();

    const handleSubmit =() => {
      localStorage.setItem("productoClickado",props.producto.id);
      navigate("/detallesProducto");
    }
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 500 } }>
          <CardMedia sx={{ m: "10rm", mx:'auto'}}
            component="img"
            style={{height: "300px",width:"300"}}
            image={imagen}
            
            alt={props.producto.nombre}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {props.producto.nombre}
            </Typography>
            <Typography gutterBottom variant="subtitle1" color="text.secondary">
              {props.producto.categoria}
            </Typography>
            <Typography variant="body1">
              {props.producto.nombre}
            </Typography>
            <Typography variant="h6" color="blue">
                {props.producto.precio + " €"}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          <Button size="small" onClick={() =>   {    localStorage.setItem("productoClickado",props.producto.id);
          navigate("/detallesProducto")}} >VER DETALLES</Button>
         </CardActions>
        </Card>
      );
}

export default CardProducto;