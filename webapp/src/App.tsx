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

function App(): JSX.Element {

  const [token, setToken] = useState();


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
          <Route path="/loggin" element={<LogginForm />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/ayuda" element={<Ayuda />} />

          </Routes>
      </BrowserRouter>
  </>

  );
}

export default App;
