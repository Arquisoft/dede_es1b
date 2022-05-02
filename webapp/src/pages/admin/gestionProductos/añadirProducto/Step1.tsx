import React,{useState} from "react";
import { Input } from "antd";
import { Divider, Grid, TextField } from "@mui/material";

function Step1(props:any) {

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');


  return (
    <div className="login-box">
           
      <Grid container spacing={2}>
          <Grid item xs={8} >
          <h2>    INSERTAR NOMBRE</h2>
          </Grid>
         <Grid item xs={8}>
         <div className="user-box">
         <TextField  className='textField'
            required
            name="Nombre"
            label="nombre" 
            variant="outlined"
            value={nombre}
            onChange={e =>{ setNombre(e.target.value);localStorage.setItem("nombreNuevoProd",e.target.value);}}
            sx={{ my: 2 , background:'white', marginLeft:'70px',width:'100%'}}
          />
          </div>
        </Grid>
        <Grid item xs={8} >
          <h2>INSERTAR CATEGORÍA</h2>
          </Grid>
        <Grid item xs={8}>
         <div className="user-box">
         <TextField  className='textField'
            required
            name="Categoria"
            label="categoria" 
            variant="outlined"
            value={categoria}
            onChange={e =>{ setCategoria(e.target.value); localStorage.setItem("categoriaNuevoProd",e.target.value);}}
            sx={{ my: 2 , background:'white', marginLeft:'70px',width:'100%'}}
          />
          </div>
        </Grid>
</Grid>
      <Divider color='white' sx={{marginTop:'8%'}}></Divider><br></br>
      <button className="añadirProdButton" data-testid="prev" onClick={props.prev}>
				Previo
			</button>
			<button className="añadirProdButton" data-testid="next" onClick={props.next}>
				Siguiente
			</button>

    </div>
  );
}

export default Step1;