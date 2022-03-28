import { useEffect, useState } from 'react';
import Productos from '../../components/Productos';
import { getProductos } from '../../api/api';
import { Producto } from '../../shared/shareddtypes';

function ListaProductos(): JSX.Element {

  const[productos, setProductos] = useState<Producto[]>([])

  async function cargar() {
    setProductos(await getProductos());
  }

  useEffect( () => {
    cargar();
  }, [])

  return (
    <div className="productos">
      <Productos productos={productos} />
    </div>
  )
}

export default ListaProductos;