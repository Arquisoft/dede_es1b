import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Producto } from '../../shared/shareddtypes';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./homepage.css"

type ProdProps = {
    producto: Producto;
    handleAddToCart: (prod: Producto) => void;
}

function CardProducto(props: ProdProps) {

    let imagen: string = require("../../images/" + props.producto.imagen);

    return (
        <Card sx={{ maxWidth: 345, maxHeight: 490 } }>
          <CardMedia sx={{ m: "10rm", mx:'auto'}}
            component="img"
            style={{height:"220px",width:'auto'}}
            image={imagen}
            
            alt={props.producto.name}
          />
          <CardContent className="text">
            <Typography variant="h6" component="div">
              {props.producto.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" color="text.secondary">
              {props.producto.tipo}
            </Typography>
            <Typography variant="body1">
              {props.producto.descripcion}
            </Typography>
            <Typography variant="h6" color="blue">
                {props.producto.precio + " €"}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton className="buttons" color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon onClick={() => props.handleAddToCart(props.producto)}/>
            </IconButton>
          </CardActions>
        </Card>
      );
}

export default CardProducto;