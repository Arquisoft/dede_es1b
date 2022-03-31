import CardMedia from '@mui/material/CardMedia';
import "./homepage.css";

const CardSlider = (img: string) => {

    let imagen: string = require("../../images/" + img);
    
    return (
      <div className="card">
        <CardMedia sx={{ m: "10rm", mx:'auto'}}
            component="img"
            style={{height: "300px",width:"300"}}
            image={imagen}
          />
      </div>
    );
  };
  
  export default CardSlider;
  