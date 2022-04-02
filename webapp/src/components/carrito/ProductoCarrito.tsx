import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Producto } from '../../shared/shareddtypes';
import "./carrito.css";

type ProdProps = {
    producto: Producto;
}

function ProductoCarrito(props: ProdProps) {

    let imagen: string = require("../../images/" + props.producto.imagen);

  return (
    <Card className="producto" sx={{ maxWidth: 350 } }>
        <CardContent>
            <Typography variant="h6">
                {props.producto.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {props.producto.tipo}
            </Typography>
            <Typography variant="h6" color="blue">
                {"x uds. (" + props.producto.precio + " €)"}
            </Typography>
        </CardContent>
        <CardMedia
            className = "foto"
            component="img"
            sx={{ width: 90 }}
            image={imagen}
            alt={props.producto.name}
        />
    </Card>
  );
}

export default ProductoCarrito;