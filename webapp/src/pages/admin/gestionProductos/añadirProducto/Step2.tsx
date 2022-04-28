import Divider from "@mui/material/Divider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import React,{useState} from "react";
import './step2.css'
type AddProductProps = {
  nombre: String;
  categoria: String;
  descripcion:String;
}

function Step2(props:any) {
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [precio, setPrecio] = useState('');

  return (
    <div>
      <p>
      <h3 >Descripción:</h3></p>
      <p>
      <TextareaAutosize 
          aria-label="empty textarea"
          placeholder="Descripción"
          value={descripcion}
          style={{ width: 300, height:40 }}
          onChange={e =>{ setDescripcion(e.target.value); localStorage.setItem("descripcionNuevoProd",descripcion);}}
      />
      </p>
      <p><h3 >Precio:</h3></p>

      <p>
        <TextField  className='textField'
            required
            name="Precio"
            label="precio" 
            variant="outlined"
            value={precio}
            onChange={e =>{ setPrecio(e.target.value); localStorage.setItem("imagenNuevoProd",imagen);}}
          />
      </p>
      <p><h3 >Imagen:</h3></p>

      <p>
      <TextField  className='textField'
            required
            name="Imagen"
            label="imagen" 
            variant="outlined"
            value={imagen}
            onChange={e =>{ setImagen(e.target.value); localStorage.setItem("imagenNuevoProd",imagen);}}
          />
      </p>
      <Divider color='black'></Divider><br></br>
      <button className="añadirProdButton" data-testid="prev" onClick={props.prev}>
				Prev
			</button>
			<button className="añadirProdButton" data-testid="next" onClick={props.next}>
				Next
			</button>
    </div>
  );
}

export default Step2;
