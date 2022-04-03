import React, { useState, useEffect } from 'react';
import LogginForm from './pages/logginPage/LogginForm';
import  {getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import './App.css';
import Bienvenida from './pages/bienvenidaPage/bienvenidaPage';
import Registro from './pages/registroPage/registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/mainPage/Homepage";
import Ayuda from "./pages/ayudaPage/ayuda";
import Catalogo from "./pages/catalogoPage/catalogo";
import CatalogoListado from "./pages/productosPorCategoria/productosPorCategoria";
import ListaUsuariosParaEliminar from './pages/listaClientes/listaClientes';
import ListaProductosParaEliminar from './pages/listaProductosAdmin/listaProductosAdmin';
function App(): JSX.Element {



  const [users,setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);

  return (
    <>        

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida/>}/>
          <Route path="/inicio" element={<Home/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="catalogo/:categoria" element={<CatalogoListado />} />

          <Route path="/loggin" element={<LogginForm />} /> 
          <Route path="/registro" element={<Registro />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/usuarios/list" element={<ListaUsuariosParaEliminar />} />
          <Route path="/productos/list" element={<ListaProductosParaEliminar />} />


          </Routes>
      </BrowserRouter>
  </>

  );
}

export default App;
