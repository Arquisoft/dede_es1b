import React from "react";
import { Producto } from '../../../../shared/shareddtypes';
import {addProduct} from '../../../../api/api';


function FinalStep(props:any) {

  const handleSubmit =() => {
    let result:boolean = await addProduct();
    if (result){
      
    }
   
  }
  return (
    
    <div style={{ textAlign: "left" }}>
      <p>
        <b>Nombre:</b> {localStorage.getItem("nombreNuevoProd")}
      </p>
      <p>
      <b>Categoria:</b> {localStorage.getItem("categoriaNuevoProd")}
      </p>
      <p>
        <b>Descripcion:</b>{localStorage.getItem("descripcionNuevoProd")}
      </p>
      <p>
       <b> Imagen:</b> {localStorage.getItem("imagenNuevoProd")}
      </p>

      <button className="añadirProdButton" data-testid="prev" onClick={handleSubmit}>
				Guardar
			</button>

    </div>
  );
}

export default FinalStep;
