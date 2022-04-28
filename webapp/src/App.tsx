import React, { useState, useEffect } from 'react';
import  {getRoleFromPod, getUsers, iniciarSesion} from './api/api';
import {User} from './shared/shareddtypes';
import Bienvenida from './pages/bienvenidaPage/bienvenidaPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/mainPage/Homepage";
import Ayuda from "./pages/ayudaPage/ayuda";
import Catalogo from "./pages/catalogoPage/catalogo";
import CatalogoListado from "./pages/productosPorCategoria/productosPorCategoria";
import DetallesProducto from "./pages/productPage/productPage";
import VentanaPago from "./pages/pagoPage/VentanaPago";
import PagoFinalizado from "./pages/pagoPage/PagoFinalizado";
import PerfilUsuario from "./pages/perfilUsuario/perfilUsuario";

import './App.css';
import { SessionProvider, useSession } from "@inrupt/solid-ui-react";


import ListaUsuariosParaEliminar from './pages/listaClientes/listaClientes';
import ListaProductosParaEliminar from './pages/listaProductosAdmin/listaProductosAdmin';

function App(): JSX.Element {


  const [users,setUsers] = useState<User[]>([]);
  const { session } = useSession();
  const [ userLogged,setUserLogged ] = useState('');


  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(()=>{
    refreshUserList();
  },[]);




  return (
    <>        
    <SessionProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida/>}/>
          <Route path="/inicio" element={<Home />}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="catalogo/:categoria" element={<CatalogoListado />} />

          <Route path="/perfilUsuario" element={<PerfilUsuario />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/usuarios/list" element={<ListaUsuariosParaEliminar />} />
          <Route path="/productos/list" element={<ListaProductosParaEliminar />} />
          <Route path="/detallesProducto" element={<DetallesProducto />} />
          <Route path="/pago" element={<VentanaPago />} />
          <Route path="/pago/finalizado" element={<PagoFinalizado />} />

        </Routes>
    </BrowserRouter>
    </SessionProvider>
  </>

  );
}

export default App;
