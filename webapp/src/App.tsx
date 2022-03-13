import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import LogginForm from './pages/logginPage/LogginForm';
import UserList from './components/UserList';
import  {getUsers} from './api/api';
import MenuBar from './pages/menuBar';
import {User} from './shared/shareddtypes';
import './App.css';
import Bienvenida from './pages/bienvenidaPage/bienvenidaPage';
import Registro from './pages/registroPage/RegistroForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Bienvenida/>}/>
          <Route path="/loggin" element={<LogginForm />} />
          <Route path="/registro" element={<Registro />} />
          </Routes>
      </div>
      </BrowserRouter>
  </>
  );
}

export default App;
