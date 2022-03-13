import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import UserList from './components/UserList';
import  {getUsers} from './api/api';
import MenuBar from './pages/menuBar';
import {User} from './shared/shareddtypes';
import './App.css';
import Registro, { RegistroComponent } from './pages/registroPage/registro'
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import LogginForm, {LogginComponent} from './pages/logginPage/LogginForm';


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
    <MenuBar></MenuBar>

      <Container maxWidth="sm">
    <br></br><br></br> <br></br>

      <LogginForm></LogginForm>        
    </Container>
</>  
  );
}

export default App;
