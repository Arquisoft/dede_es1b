import CardMedia from '@mui/material/CardMedia';
import { Producto } from '../../shared/shareddtypes';
import "./homepage.css";

type ProdProps = {
    producto: Producto;
}

function CardSlider(props: ProdProps) {

    let imagen: string = require("../../images/" + props.producto.imagen);
    
    return (
      <div className="card">
        <CardMedia sx={{ m: "10rm", mx:'auto'}}
            component="img"
            style={{height: "300px",width:"300"}}
            image={imagen}
            
            alt={props.producto.nombre}
          />
      </div>
    );
  };
  
  export default CardSlider;
  