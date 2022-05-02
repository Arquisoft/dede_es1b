import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import logo from '../logoAsturShop.png'
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./menuBarAdmin.css";
import {useNavigate} from 'react-router-dom';

import {
  LogoutButton,
  SessionProvider,
} from "@inrupt/solid-ui-react";



const AdminAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event: { currentTarget: any; }) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 /*  const handleUserMenuOptions = (setting:string) => {
    switch(setting){
      case "Cerrar sesión":{
        localStorage.setItem("token","");
        console.log("clickaste cerrar sesion");
  
        break;
      }
      default:{
        console.log("otruuuutrucutrucu");
        break;
      }
    }
  
  }; */
  
  return (
    <div className="appBar">
    <AppBar position="static" style={{ background: '#2e7d32' }}>
      
      <div className="menu-container">
          <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component={Link} to="/inicio"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            
          >
                    <img src={logo} width="100" height="80" alt="logo" /> 

          </Typography>
          <Box>
          <MenuItem component={Link} to="/usuarios/list">
          <Typography>Lista de clientes</Typography>
          </MenuItem>
          </Box>

       
          <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/gestionProductos" >
          <Typography>Gestión productos</Typography>
          </MenuItem>
          </Box>

        

          <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/gestionPedidos" >
          <Typography>Gestión pedidos</Typography>
          </MenuItem>
          </Box>
          
          <Box sx={{marginLeft:'50%'}}>
          <SessionProvider >       
	          <LogoutButton 
             onLogout={()=>{navigate("/inicio");}}
             
            />
           </SessionProvider>
           </Box>
          <Box  sx={{marginLeft:'auto'}}>
          <div className="iconoLoggin">
                <IconButton onClick={handleOpenUserMenu}  >
                <AccountCircle 
                  style={{ fontSize: "35px", color: '#FFFFFF ' }}
                />
                </IconButton>

          </div>
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            {/*   {settingsAdmin.map((setting) => (
                <MenuItem key={setting} onClick={()=>handleUserMenuOptions(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          
        </Toolbar>

        </div>

    </AppBar>
    
    </div>
  );
};
export default AdminAppBar;
