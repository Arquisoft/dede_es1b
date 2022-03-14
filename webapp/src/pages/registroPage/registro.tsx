import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./registro.css"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import MenuBar from '../menuBar';
import {addUser} from '../../api/api'

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
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');


  const [notificationStatus, setNotificationStatus] = useState(false);
  const [notification, setNotification] = useState<NotificationType>({severity:'success',message:''});
  
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let result:boolean = await addUser({name,surname,username,password,email});
    if (result){
      setNotificationStatus(true);
      setNotification({ 
        severity:'success',
        message:'You have been registered in the system!'
      });
      //Notify the change to the parent component
      navigate("/inicio");
    }
    else{
      setNotificationStatus(true);
      setNotification({ 
        severity:'error',
        message:'There\'s been an error in the register proccess.'
      });
    }
  }
  return (
    <>         
    <MenuBar></MenuBar>
     <h1>Registro Cuenta</h1>

        <div className="registro-container">
        <form onSubmit={handleSubmit} name="registro" >
        <div className="registro-contenido">

      <div className='field-container'>

          <TextField
          label="Nombre:"
          id="filled-size-small"
          variant="filled"
          onChange={e => setName(e.target.value)}
          sx={{ my: 2 }}

        />
        </div>

        <div className='field-container'>

        <TextField
          label="Apellidos:"
          id="filled-size-small"
          variant="filled"
          onChange={e => setSurname(e.target.value)}
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
        <Button variant="contained" type="submit" sx={{ my: 2 } }>Iniciar sesión</Button>
        </form>
        </div>

    </>
  );
}

 export default RegisterForm;