import { useEffect, useState } from 'react';
import Productos from '../../components/Productos';
import { getProductosPorCategoria } from '../../api/api';
import { Producto } from '../../shared/shareddtypes';
import MenuBar from "../menuBar";
import {useParams} from "react-router-dom";

type ProdProps = {
  handleAñadirAlCarrito: (prod: Producto) => void;
}

function ListaProductos(props: ProdProps): JSX.Element {

  const[productos, setProductos] = useState<Producto[]>([])
  const {categoria} = useParams();

  let cat:string =categoria!; 

  async function cargar() {
    setProductos(await getProductosPorCategoria(cat));
  }

  useEffect( () => {
    cargar();
  }, [])

  return (
      
    <div className="productos-container" >
          <MenuBar/>
            <h1>AsturShop</h1>

      <div className='productos'>

      <Productos productos={productos} handleAñadirAlCarrito={props.handleAñadirAlCarrito} />
      </div>
    </div>
  )
}

export default ListaProductos;