import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Producto,ProductoPago} from '../../shared/shareddtypes';
import Button from '@mui/material/Button';
import "./carrito.css";

type ProdProps = {
    producto: ProductoPago;
    añadirProd: (prod: ProductoPago) => void;
    eliminarProd: (id: string) => void;
}

function ProductoCarrito(props: ProdProps) {

  return (
    <Card className="producto" sx={{ maxWidth: 350 } }>
        <CardContent>
            <Typography variant="h6">
                {props.producto.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {props.producto.tipo}
            </Typography>
            <Typography variant="body1" color="blue">
                {props.producto.cantidad + " uds. (" + (props.producto.cantidad * props.producto.precio).toFixed(2) + " €)"}
            </Typography>
            <div className="botones">
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => props.eliminarProd(props.producto.id)}
                >-</Button>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => props.añadirProd(props.producto)}
                >+</Button>
            </div>
        </CardContent>
        <CardMedia
            className = "foto"
            component="img"
            sx={{ width: 90, maxWidth: 90 }}
            image={props.producto.imagen}
            alt={props.producto.name}
        />
    </Card>
  );
}

export default ProductoCarrito;