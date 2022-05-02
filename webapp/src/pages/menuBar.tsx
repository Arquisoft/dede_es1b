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
import { ShoppingCart } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./menuBar.css";
import Badge from '@mui/material/Badge';
import {useNavigate} from 'react-router-dom';
import MenuBarAdmin from "./menuBarAdmin";


import { getAddressesFromPod, getIdPorWebId, getRoleFromPod, iniciarSesion } from '../api/api';
import { useEffect } from 'react';
import { LoginButton, useSession } from '@inrupt/solid-ui-react';






const ResponsiveAppBar = () => {
const { session } = useSession();




const authOptions = {
  clientName: "Solid Todo App",
};

const settings = [ 'Mis pedidos','Cerrar sesión'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event: { currentTarget: any; }) => {
    setAnchorElUser(event.currentTarget);
  };

  const logoImg: string = "https://res.cloudinary.com/dlix47jlq/image/upload/v1650910768/iconos/logoAsturShop_i41dwr.png";

  const handleUserMenuOptions = (setting:string) => {
    switch(setting){
      case "Cerrar sesión":{
        localStorage.setItem("token","");
        localStorage.setItem("cantidadCarrito","0");
        navigate("/inicio");
        console.log("clickaste cerrar sesion");
        session.logout();

        break;
      }
     case "Mis pedidos":{
            navigate("/pedidos/usuario/list");
            break;
        }
      default:{
        console.log("otruuuutrucutrucu");
        break;
      }
    }

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  

  const navigate = useNavigate();
  

  //SOLID
  
  const manejoSesion = async () =>{
    console.log("akaka `+ "+ session.info.webId);
    await iniciarSesion(""+session.info.webId);
  }
  
  

  useEffect( () => {
    session.onLogin(async () => {
      
      manejoSesion();
      let rol = await getRoleFromPod(session.info.webId!);
      var userId = await getIdPorWebId(session.info.webId!);
      let direcciones:string = await getAddressesFromPod(session.info.webId!);
      
      sessionStorage.setItem("idUser",""+userId);

      sessionStorage.setItem("direcciones",""+direcciones);
      
      if(rol!=="Admin")
        localStorage.setItem("rol","usuario");
      else{
          localStorage.setItem("rol",rol);
          navigate("/usuarios/list")
      }
      console.log("onlogin   ",session.info.webId);
      
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  if(session.info.isLoggedIn && localStorage.getItem("rol")==="usuario"){
  return (
    <div className="appBar">
    <AppBar position="static">
      
      <div className="menu-container">
          <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component={Link} to="/inicio"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
                    <img src={logoImg} width="100" height="80" alt="logo" /> 

          </Typography>
          <Box>
          <MenuItem component={Link} to="/inicio">
          <Typography>INICIO</Typography>
          </MenuItem>
          </Box>

       
          <Box sx={{ paddingLeft: '3%' }}>
          <MenuItem component={Link} to="/catalogo" >
          <Typography>CATÁLOGO</Typography>
          </MenuItem>
          </Box>



        
          
          <Box sx={{ marginLeft:'20%'}}>
            <div className="shoppingIcon">
              <IconButton>
              <Badge badgeContent={localStorage.getItem("cantidadCarrito")} color="error">
                  <ShoppingCart/>
              </Badge>
              </IconButton>
            </div>
          </Box>


        

       {/*    <div className="loggedout">	  
          <SessionProvider >       
	          <LogoutButton 
             onLogout={()=>{navigate("/catalogo");}}
             
            />
           </SessionProvider>
	         </div> */}

           <Box sx={{ paddingLeft: '10%' }}>
                <Typography>POD: {session.info.webId}</Typography>
          </Box>

          <Box  sx={{marginLeft:"3%"}}>

         
<MenuItem component={Link} to="/ayuda">
<Typography>AYUDA</Typography>
</MenuItem>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>handleUserMenuOptions(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          
        </Toolbar>

        </div>

    </AppBar>
    
    </div>
  );
  }
  else if(session.info.isLoggedIn && localStorage.getItem("rol")===("Admin")){
    return (
      <MenuBarAdmin></MenuBarAdmin>
      );
  }else{
    return (
      <div className="appBar">
      <AppBar position="static">
        
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
            <MenuItem component={Link} to="/inicio">
            <Typography>INICIO</Typography>
            </MenuItem>
            </Box>
  
         
            <Box sx={{ paddingLeft: '3%' }}>
            <MenuItem component={Link} to="/catalogo" >
            <Typography>CATÁLOGO</Typography>
            </MenuItem>
            </Box>
  
            
            <Box sx={{ paddingLeft:'3%' ,marginRight:'auto'}}>
            <div className="shoppingIcon">
            <IconButton  >
            <Badge badgeContent={localStorage.getItem("cantidadCarrito")} color="error">
                  <ShoppingCart/>    
                  </Badge>
              </IconButton>
            </div>
            
            </Box>
            <Box sx={{ paddingLeft: 'auto' }}>
         
               <MenuItem component={Link} to="/ayuda">
                <Typography>AYUDA</Typography>
                </MenuItem>
            </Box>
            
            <Box  sx={{marginLeft:'auto'}}>
            <div className="iconoLoggin">

                  <LoginButton 
                    oidcIssuer={"https://inrupt.net/"}
		                redirectUrl={"https://dede-es1b.herokuapp.com/inicio"}
		                authOptions={authOptions}
                   >
                
                  <IconButton >

                  <AccountCircle 
                    style={{ fontSize: "35px", color: '#FFFFFF ' }}
                  />

                  </IconButton>
                  </LoginButton>
            </div>
            
            </Box>
          </Toolbar>
  
          </div>
  
      </AppBar>
      
      </div>
    );
  }
};
export default ResponsiveAppBar;