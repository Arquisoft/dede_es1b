import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Producto,ProductoPago } from '../../shared/shareddtypes';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./homepage.css"
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';

type ProdProps = {
    producto: ProductoPago;
    handleAñadirAlCarrito: (prod: ProductoPago) => void;
}

function CardProducto(props: ProdProps) {
  const navigate = useNavigate();

    return (
        <Card sx={{ width: 345, maxHeight: 490 } }>
          <CardMedia className="foto" sx={{ m: "10rm", mx:'auto'}}
            component="img"
            style={{height:"220px",width:'auto'}}
            image={props.producto.imagen}
            
            alt={props.producto.name}
          />
          <CardContent className="text">
            <Typography variant="h6" component="div">
              {props.producto.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" color="text.secondary">
              {props.producto.tipo}
            </Typography>
            <Typography variant="h6" color="blue">
                {props.producto.precio + " €"}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton className="buttons" color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon onClick={() => {props.handleAñadirAlCarrito(props.producto); }}/>
            </IconButton>
             <Button size="small" onClick={() =>   {  let productoString = props.producto.name+','+props.producto.descripcion+','
                + props.producto.tipo+','+props.producto.imagen+','+props.producto.precio;
                localStorage.setItem("productoClickado",productoString);
                navigate("/detallesProducto");}} 
              >VER DETALLES</Button>
          </CardActions>
        </Card>
      );
}

export default CardProducto;