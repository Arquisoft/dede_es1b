import { useEffect, useState } from 'react';
import Productos from '../../components/Productos';
import { getProductos} from '../../api/api';
import { Producto } from '../../shared/shareddtypes';
import "./listaProductos.css";

function ListaProductos(): JSX.Element {

  const[productos, setProductos] = useState<Producto[]>([])

  async function cargar() {
    setProductos(await getProductos());
  }

  useEffect( () => {
    cargar();
  }, [])

  return (
    <div className="productos-container" >
      <div className='productos'>
      <Productos productos={productos} />
      </div>
    </div>
  )
}

export default ListaProductos;
