import React,{useState} from "react";
import { Divider, Grid, TextField } from "@mui/material";
import './step1ListadoPedidosUsuario.css';

function Step1(props:any) { 

  const [userid, setUserId] = useState('');


  return (
    <div className="login-box">
      <Grid container spacing={2}>
          <Grid item xs={8} >
          <h2>INSERTAR ID USUARIO</h2>
          </Grid>
         <Grid item xs={8}>
         <div className="user-box">
         <TextField  className='textField'
            required
            name="userid"
            label="Id usuario" 
            variant="outlined"
            value={userid}
            onChange={e =>{ setUserId(e.target.value); localStorage.setItem("userIdBuscarPedido",e.target.value);}}
            sx={{ my: 2 , background:'white', marginLeft:'70px',width:'100%'}}
          />
          </div>
        </Grid>
</Grid>
      <br></br>
      <Divider color='white' sx={{width:'100%'}}></Divider><br></br>
			<button className="añadirProdButton" data-testid="next" onClick={props.next}>
				Siguiente
			</button>

    </div>
  );
}

export default Step1;