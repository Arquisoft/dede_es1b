import React,{useState} from "react";
import { Input } from "antd";
import { Divider, TextField } from "@mui/material";

function Step1(props:any) {

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');


  return (
    <div>
      <p>
      <h2>Nombre:</h2></p>
      <p>
      <TextField  className='textField'
            required
            name="Nombre"
            label="nombre" 
            variant="outlined"
            value={nombre}
            onChange={e =>{ setNombre(e.target.value); localStorage.setItem("nombreNuevoProd",nombre);}}
            sx={{ my: 2 }}
          />
      </p>
      <p>
      <h2>Categoría:</h2></p>
      <p>
      <TextField  className='textField'
            required
            name="Categoria"
            label="categoria" 
            variant="outlined"
            value={categoria}
            onChange={e =>{ setCategoria(e.target.value); localStorage.setItem("categoriaNuevoProd",categoria);}}
            sx={{ my: 2 }}
          />
      </p>
      <Divider color='black' sx={{marginTop:'8%'}}></Divider><br></br>
      <button className="añadirProdButton" data-testid="prev" onClick={props.prev}>
				Prev
			</button>
			<button className="añadirProdButton" data-testid="next" onClick={props.next}>
				Next
			</button>

    </div>
  );
}

export default Step1;