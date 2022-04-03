import React, { useState, useEffect } from 'react';
import LogginForm from './pages/logginPage/LogginForm';
import  {getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import Bienvenida from './pages/bienvenidaPage/bienvenidaPage';
import Registro from './pages/registroPage/registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/mainPage/Homepage";
import Catalogo from "./pages/catalogoPage/catalogo";
import CatalogoListado from "./pages/productosPorCategoria/productosPorCategoria";
import { Producto } from './shared/shareddtypes';
import './App.css';

function App(): JSX.Element {

  const [token, setToken] = useState();

  const [users,setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);

  const [carritoAb, setCarritoAb] = useState(false);
  const [carrito, setCarrito] = useState([] as Producto[]);

  const handleAñadirAlCarrito = (prod: Producto) => {
    setCarrito(prev => {
        const prodAñadido = prev.find(p => p.id === prod.id)
        if (prodAñadido) {
            return prev.map(p => (
                p.id === prod.id ? {
                    ...p, cantidad: p.cantidad + 1
                } : p
            ));
        }
        return [...prev, {...prod, cantidad: 1}];
    });
};
const handleEliminarDelCarrito = () => null;

  return (
    <>        

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida/>}/>
          <Route path="/inicio" element={<Home/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
            <Route path="catalogo/:categoria" element={<CatalogoListado handleAñadirAlCarrito={handleAñadirAlCarrito} />} />

          <Route path="/loggin" element={<LogginForm />} /> 
          <Route path="/registro" element={<Registro />} />

          </Routes>
      </BrowserRouter>
  </>

  );
}

export default App;
