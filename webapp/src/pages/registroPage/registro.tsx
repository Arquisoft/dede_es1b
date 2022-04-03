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
  
  const [usuario, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [correo, setEmail] = useState('');
  
   const registrar =()=>{
    navigate("/inicio");
    var id= '';
    console.log("llegó");
    addUser({id,name,surname,usuario,password,correo});
    console.log({name});
    console.log({surname});
    console.log({usuario});
    console.log({password});
    console.log({correo});

   
  
}
  
  const [notificationStatus, setNotificationStatus] = useState(false);
  const [notification, setNotification] = useState<NotificationType>({severity:'success',message:''});
  
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('prueba');
    var id= '';
    e.preventDefault();
    let result:boolean = await addUser({id,name,surname,usuario,password,correo});
    console.log({name});
    console.log({surname});
    console.log({usuario});
    console.log({password});
    console.log({correo});

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
          id="filled-size-small"
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
          id="filled-size-small"
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
          id="filled-size-small"
          variant="outlined"
          value={correo}
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
          id="filled-size-small"
          variant="outlined"
          value={usuario}
          onChange={e => setUsername(e.target.value)}
          sx={{ my: 2 }}

        />
        </div>
        
        <h3>Contraseña:</h3>

        <TextField className='textField'
          required
          label="Contraseña:"
          name="password"
          id="filled-size-small"
          variant="outlined"
          type="password"
        
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{ my: 2 }}

        />

        </div>
        <Button  variant="contained" type="button" onClick={() => registrar()} sx={{ my: 2 } }>Registrarse</Button>
        </form>
        </div>
        <br></br><br></br>

    </>
  );
}

 export default RegisterForm;