import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';
import {addUser} from '../api/api';
import Box from '@mui/material/Box';

type EmailFormProps = {
  OnUserListChange: () => void;
}

type NotificationType = {
  severity: AlertColor,
  message: string;
}

function EmailForm(props: EmailFormProps): JSX.Element {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [notificationStatus, setNotificationStatus] = useState(false);
  const [notification, setNotification] = useState<NotificationType>({severity:'success',message:''});
  

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let result:boolean = await addUser({name,email});
    if (result){
      setNotificationStatus(true);
      setNotification({ 
        severity:'success',
        message:'You have been registered in the system!'
      });
      //Notify the change to the parent component
      props.OnUserListChange();
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
      <form name="register" onSubmit={handleSubmit}>
      <Box component="h2">Username: </Box>
      
        <TextField
            required
            name="username"
            label="username" 
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
            sx={{ my: 2 }}
          />
      
      <Box component="h2">Password: </Box>
        <TextField
          required
          name="password"
          label="password" 
          variant="outlined"
          type="password"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ my: 2 }}
        />

        <br></br>
        <Button variant="contained" type="submit" sx={{ my: 2 }}>Iniciar sesión</Button>
      </form>
      <Snackbar open={notificationStatus} autoHideDuration={3000} onClose={()=>{setNotificationStatus(false)}}>
        <Alert severity={notification.severity} sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default EmailForm;
