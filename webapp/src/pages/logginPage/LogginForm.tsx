import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./logginForm.css"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import {checkUser} from '../../api/api';
import Box from '@mui/material/Box';
import logo from '../../logoAsturShop.png'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MenuBar from "../menuBar";
import {useNavigate} from 'react-router-dom';
import { getProductosPorCategoria } from '../../api/api';

type EmailFormProps = {
  OnUserListChange: () => void;
}

type NotificationType = {
  severity: AlertColor,
  message: string;
}

function EmailForm(): JSX.Element {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //generar token para el usuario
  const [token, setToken] = useState();

  const [notificationStatus, setNotificationStatus] = useState(false);
  const [notification, setNotification] = useState<NotificationType>({severity:'success',message:''});
  
  const navigate = useNavigate();

  
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let result:boolean = await checkUser(username,password);
    if (result){
      setNotificationStatus(true);
      setNotification({ 
        severity:'success',
        message:'You have been registered in the system!'
      });
      navigate("/inicio");
      //Notify the change to the parent component
    }
    else{
      setNotificationStatus(true);
      setNotification({ 
        severity:'error',
        message:'Usuario o contraseña incorrecta'
      });
    }
  }

  return (
    <>
      <MenuBar></MenuBar>
      <h1>Inicio sesión</h1>

      <div className='loggin-container'>
      <form name="loggin" onSubmit={handleSubmit}>

      <div className='loggin-content'>
      <h3>Usuario:</h3>
      <div className='field-container'>
      
        <TextField  className='textField'
            required
            name="Usuario"
            label="username" 
            variant="outlined"
            value={username}
            onChange={e => setUsername(e.target.value)}
            sx={{ my: 2 }}
          />
      </div>
      <div className='field-container'>
   
        <h3>Contraseña:</h3>
        <TextField  className='textField'
          required
          name="Contraseña"
          label="password" 
          variant="outlined"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{ my: 2 }}
        />
        </div>    

        <div className='buttons'>
           <br></br>
           <Button variant="contained" onClick={() => handleSubmit} type="submit" sx={{ my: 2 }}>Iniciar sesión</Button>
           <br></br>
           <Button variant="contained" onClick={() => navigate("/registro")} type="submit" sx={{ my: 2 }}>¿No tienes cuenta? Regístrate</Button>
           </div>
        </div>
        
        </form>
        
      </div>
      <Snackbar open={notificationStatus} autoHideDuration={3000} onClose={()=>{setNotificationStatus(false)}}>
        <Alert severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default EmailForm;
