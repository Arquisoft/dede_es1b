import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import LogginForm from './pages/logginPage/LogginForm';
import UserList from './components/UserList';
import Homepage from './pages/mainPage/Homepage';
import CardProducto from './pages/mainPage/CardProducto';
import  {getUsers} from './api/api';
import MenuBar from './pages/menuBar';
import {User} from './shared/shareddtypes';
import './App.css';
import Bienvenida from './pages/bienvenidaPage/bienvenidaPage';
import Registro from './pages/registroPage/registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Producto} from './api/modelo/producto';
import Home from "./pages/mainPage/Homepage";

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
          <Route path="/home" element={<Home/>}/>
          <Route path="/loggin" element={<LogginForm />} />
          <Route path="/registro" element={<Registro />} />
          </Routes>
      </BrowserRouter>
  </>

  );
}

export default App;
