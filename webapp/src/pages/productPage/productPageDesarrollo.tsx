import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './productPage.css';
import Paper from '@mui/material/Paper';

function ProductPageDes(): JSX.Element {

  const navigate = useNavigate();

  const imagen = "https://res.cloudinary.com/dlix47jlq/image/upload/v1650910880/productos/cortina_yyf3ip.png";

  return (
    <>
    <h1>Sidra Cortina</h1>

    <div className='productPageContainer'>
    <table><tr>
      <td>
    <Box sx={{ flexGrow: 1 }}>
     
        <Card sx={{ maxWidth: 400, marginLeft:'50px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={imagen}
        />
      </CardActionArea>
      </Card>
    </Box>    

    </td><td>
      <Box>
       <Grid container spacing={1}>
        <Grid item xs={12} sx={{marginLeft:'30px'}}>          
        <Paper>
        Categoria: Comida
        </Paper>

        </Grid>
        </Grid>

      </Box>   

      </td> </tr></table>
    </div>



    </>

  );
}

 export default ProductPageDes;

