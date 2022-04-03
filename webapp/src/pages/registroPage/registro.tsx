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
    console.log({name});
    console.log({surname});
    console.log({username});
    console.log({password});
    console.log({email});

    let result:boolean = await addUser({name,surname,username,password,email});
    
    if (result){
      console.log("hola");
      setNotificationStatus(true);
      setNotification({ 
        severity:'success',
        message:'You have been registered in the system!'
      });
      //Notify the change to the parent component
      navigate("/loggin");
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
       <h3>Nombre:</h3>

          <TextField className='textField'
          required
          label="Nombre:"
          name="name"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ my: 2 }}

        />
        </div>

        <div className='field-container'>
        <h3>Apellidos:</h3>

        <TextField className='textField'
          required
          label="Apellidos:"    
          name="surname"
          variant="outlined"
          value={surname}
          onChange={e => setSurname(e.target.value)}
          sx={{ my: 2 }}

        />
        </div>
        <div className='field-container'>
        <h3>Correo electrónico:</h3>

        <TextField className='textField'
          required
          label="Correo Electronico:"
          name="email"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ my: 2 }}

        />

        </div>
        <div className='field-container'>
        <h3>Usuario:</h3>

        <TextField className='textField'
          required
          label="Usuario:"
          name="username"
          variant="outlined"
          value={username}
          onChange={e => setUsername(e.target.value)}
          sx={{ my: 2 }}

        />
        </div>
        
        <h3>Contraseña:</h3>

        <TextField className='textField'
          required
          label="Contraseña:"
          name="password"
          variant="outlined"
          type="password"
        
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{ my: 2 }}

        />

        </div>
        <Button variant="contained" type="submit" onClick={() => handleSubmit} sx={{ my: 2 } }>Registrarse</Button>
        </form>
        </div>
        <br></br><br></br>

    </>
  );
}

 export default RegisterForm;