import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import type { AlertColor } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import MenuBar from './menuBar';
import {addUser, getAddressesFromPod} from '../api/api'

import {
    LoginButton,
    Text,
    useSession,
    CombinedDataProvider,
    LogoutButton,
    SessionProvider,
  } from "@inrupt/solid-ui-react";




function PerfilUsuario(): JSX.Element {

   const [direcciones,setDirecciones]=useState<string[]>([]);

  const navigate = useNavigate();

  const { session } = useSession();

  
  const refreshDirecciones = async () => {
    setDirecciones(await getAddressesFromPod(session.info.webId!));
    console.log(sessionStorage.getItem("sesionSolid"));
  }

  useEffect(()=>{
    refreshDirecciones();
  },[]);

    

  return (
    <>         
    <MenuBar></MenuBar>
     <h1>{session.info.webId}</h1>
      <h2>{direcciones[0]}</h2>
      <h2>{direcciones[1]}</h2>


    </>
  );
}

 export default PerfilUsuario;