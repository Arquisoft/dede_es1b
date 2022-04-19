import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./pago.css";

type ProdProps = {
    nombre: string;
    id:string;
    precio: number;
    cantidad: number;
    imagen: string;
}

function ProductoPedido(props: ProdProps) {
    
    let imagen: string = require("../../images/" + props.imagen);

    return (
        <Card className="producto">
            <CardContent>
                <Typography variant="h5">
                    {props.nombre}
                </Typography>
                <Typography variant="body1" color="black">
                    {"Precio: " + props.precio.toFixed(2) + " €"}
                </Typography>
                <Typography variant="body1" color="black">
                    {props.cantidad + " unidades"}
                </Typography>
            </CardContent>
            <CardMedia
                className = "foto"
                component="img"
                sx={{ width: 90, maxWidth: 90 }}
                image={imagen}
                alt={props.nombre}
            />
        </Card>
    );
}

export default ProductoPedido;