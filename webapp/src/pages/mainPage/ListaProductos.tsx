import { useEffect, useState } from 'react';
import Productos from '../../components/Productos';
import { getProductos } from '../../api/api';
import { Producto } from '../../shared/shareddtypes';
import CardProducto from './CardProducto';
import "./ListaProductos.css";

function ListaProductos(): JSX.Element {

  const[productos, setProductos] = useState<Producto[]>([])

  async function cargar() {
    setProductos(await getProductos());
  }

  useEffect( () => {
    cargar();
  }, [])
/*
  let p1: Producto = {
    id : "123456",
    nombre : "Callos",
    precio : 4.95,
    imagen : "callos",
    categoria : "Alimentación",
    descripcion : "Bote de callos caseros"
  }

  let p2: Producto = {
    id : "112233",
    nombre : "Compango",
    precio : 8.95,
    imagen : "compango",
    categoria : "Alimentación",
    descripcion : "Compango para fabada asturiana"
  }

  let p3: Producto = {
    id : "123123",
    nombre : "Fabada",
    precio : 4.95,
    imagen : "fabada",
    categoria : "Alimentación",
    descripcion : "Fabada asturiana Litoral"
  }

  let p4: Producto = {
    id : "111111",
    nombre : "Horreo",
    precio : 20,
    imagen : "horreos",
    categoria : "Decoración",
    descripcion : "Hórreo de madera artesanal"
  }

  let p5: Producto = {
    id : "654321",
    nombre : "Sidra",
    precio : 13,
    imagen : "sidra",
    categoria : "Alimentación",
    descripcion : "Caja sidra 6 unidades"
  }*/

  return (
    <div className="productos">
      <Productos productos={productos} />
    </div>
  )
/*
  return (
    <>
      <div className="productos">
        <CardProducto producto={p1}></CardProducto>
        <CardProducto producto={p2}></CardProducto>
        <CardProducto producto={p3}></CardProducto>
        <CardProducto producto={p4}></CardProducto>
        <CardProducto producto={p5}></CardProducto>
      </div>
    </>
  );*/
}

export default ListaProductos;