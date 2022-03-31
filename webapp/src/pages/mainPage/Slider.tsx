import { useEffect, useState } from 'react';
import { getProductos } from '../../api/api';
import { Producto } from '../../shared/shareddtypes';
import CardSlider from './CardSlider';
import "./homepage.css";

function SliderProductos(): JSX.Element {

  const[productos, setProductos] = useState<Producto[]>([])

  async function cargar() {
    setProductos(await getProductos());
  }

  useEffect( () => {
    cargar();
  }, [])

  return (
    <div className="productos-container" >
      <div className="slider">
            {productos.map((prod: Producto) => {
                return <CardSlider {...prod.imagen} />;
            })}
        </div>
    </div>
  )
}

export default SliderProductos;