import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Producto } from "../api/modelo/producto";
import Button from '@mui/material/Button';

type ProdProps = {
    producto: Producto;
}

function CardProducto(props: ProdProps) {

    let imagen: string = require("../images/" + props.producto.imagen + ".jpg");

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={props.producto.imagen}
            alt={props.producto.nombre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.producto.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.producto.descripcion}
            </Typography>
            <Typography variant="h6" color="blue">
                {props.producto.precio + " €"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Añadir al carrito</Button>
          </CardActions>
        </Card>
      );
}

export default CardProducto;