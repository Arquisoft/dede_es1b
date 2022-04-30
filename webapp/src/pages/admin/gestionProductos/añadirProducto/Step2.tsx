import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { Input } from "antd";
import React,{useState} from "react";

import './step2.css'
type AddProductProps = {
  nombre: String;
  categoria: String;
  descripcion:String;
}

function Step2(props:any) {
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');

  /*
  const [fileInputState, setFileInputState] = useState('');
  const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      previewFile(file);
  }

  const [previewSource, setPreviewSource] = useState('');
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!imagen) {
      return;
    }
    uploadImage(previewSource);
  }*/

  return (
   /*  <div>
      <p>
      <h2 >Descripción:</h2></p>
      <p>
      <TextareaAutosize 
          aria-label="empty textarea"
          placeholder="Descripción"
          value={descripcion}
          style={{ width: 300, height:40 }}
          onChange={e =>{
            localStorage.removeItem("descripcionNuevoProd");
             setDescripcion(e.target.value); 
            localStorage.setItem("descripcionNuevoProd",descripcion);
          }}
      />
      </p>
      <p><h2 >Precio:</h2></p>

      <TextField
                  value={precio}
                  name="precio"
                  id="outlined-full-width"
                  label="Product price"
                  style={{ margin: 8 }}
                  required
                  margin="normal"
                  type="number"
                  variant="outlined"
                  onChange={(event) => {
                    localStorage.removeItem("precioNuevoProd");
                    setPrecio(parseFloat(event.target.value).toString());
                    localStorage.setItem("precioNuevoProd",precio);
                  }}
                />
      
      <p><h4 >Imagen:</h4></p>
      <div>
        <form
            onSubmit={handleSubmitFile}>
              <input 
                  type="file" 
                  name="image" 
                  onChange={handleFileInputChange}
                  value={imagen}
                  className="inputImagen">
                    <button
                        className="button"
                        type="submit">

                    </button>
              </input>
        </form>
      </div>
      {previewSource && (
        <img
          src={previewSource}
          alt="imagen escogida"/>
      )}
      
      <Divider color='black'></Divider><br></br>
      <button className="añadirProdButton" data-testid="prev" onClick={props.prev}>
				Prev
			</button>
			<button className="añadirProdButton" data-testid="next" onClick={props.next}>
				Next
			</button>
    </div> */
    <div className="login-box">
      <Grid container spacing={1}>
          <Grid item xs={8} >
          <h2 className="textoField">DESCRIPCIÓN</h2>
          </Grid>
         <Grid item xs={8}>
         <div className="user-box">
         <TextareaAutosize 
          aria-label="empty textarea"
          placeholder="Descripción"
          value={descripcion}
          style={{ width: 300, height:40, marginLeft:'50px' }}
          onChange={e =>{
            localStorage.removeItem("descripcionNuevoProd");
             setDescripcion(e.target.value); 
            localStorage.setItem("descripcionNuevoProd",descripcion);
          }}
         

      />
          </div>
        </Grid>

        <Grid item xs={8} >
          <h2 className="textoField">PRECIO</h2>
          </Grid>
         <Grid item xs={8}>
         <div className="user-box">
         <TextField  className='textField'
            required
            name="Precio"
            label="Precio" 
            variant="outlined"
            type="number"
            value={precio}
            onChange={(event) => {
              localStorage.removeItem("precioNuevoProd");
              setPrecio(parseFloat(event.target.value).toString());
              localStorage.setItem("precioNuevoProd",precio);
            }}
            sx={{ my: 2 , background:'white', marginLeft:'70px',width:'100%'}}

          />
          </div>
        </Grid>

        <Grid item xs={8} >
          <h2 className="textoField">IMAGEN</h2>
          </Grid>
         <Grid item xs={8}>
         <div className="user-box">
         <TextField  className='textField'
            required
            name="Imagen"
            label="imagen" 
            variant="outlined"
            value={imagen}
            onChange={e =>{ setImagen(e.target.value); localStorage.setItem("imagenNuevoProd",imagen);}}
            sx={{ my: 2 , background:'white', marginLeft:'70px',width:'100%'}}

          />
          </div>
        </Grid>
</Grid>
<Divider color='white'></Divider><br></br>
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