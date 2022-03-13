import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./registro.css"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import logo from '../../logo.svg'

type RegisterFormProps = {
  OnUserListChange: () => void;
}

type NotificationType = {
  severity: AlertColor,
  message: string;
}

function RegisterForm(): JSX.Element {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');


  const [notificationStatus, setNotificationStatus] = useState(false);
  const [notification, setNotification] = useState<NotificationType>({severity:'success',message:''});
  
  

  return (
    <>         
     <h1>Registro Cuenta</h1>

        <div className="registro-container">
        <form name="registro" >
        <div className="registro-contenido">

      <div className='field-container'>

          <TextField
          label="Nombre:"
          id="filled-size-small"
          variant="filled"
          onChange={e => setNombre(e.target.value)}
          sx={{ my: 2 }}

        />
        </div>

        <div className='field-container'>

        <TextField
          label="Apellidos:"
          id="filled-size-small"
          variant="filled"
          onChange={e => setApellidos(e.target.value)}
          sx={{ my: 2 }}

        />
        </div>
        <div className='field-container'>


        <TextField
          label="Correo Electronico:"
          id="filled-size-small"
          variant="filled"
          onChange={e => setEmail(e.target.value)}
          sx={{ my: 2 }}

        />

        </div>
        <div className='field-container'>

        <TextField
          label="Usuario:"
          id="filled-size-small"
          variant="filled"
          onChange={e => setUsername(e.target.value)}
          sx={{ my: 2 }}

        />
        </div>
        <TextField
          label="Contraseña:"
          id="filled-size-small"
          variant="filled"
          onChange={e => setPassword(e.target.value)}
          sx={{ my: 2 }}

        />
        </div>
        </form>
        </div>
    </>
  );
}

 export default RegisterForm;