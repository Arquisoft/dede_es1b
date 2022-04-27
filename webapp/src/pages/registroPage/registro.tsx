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


  return (
    <>         
    
    </>
  );
}

 export default RegisterForm;