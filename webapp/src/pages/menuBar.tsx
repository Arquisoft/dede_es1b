import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { MenuList } from '@mui/material';
import Search from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import SearchIconWrapper from '@mui/icons-material/Search';
import StyledInputBase from '@mui/icons-material/Search';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  

  return (
    
    <AppBar position="static">
      <Container maxWidth="xl">
          <Toolbar>
          
          <Box>
          <MenuItem component={Link} to="/inicio">
          <Typography>INICIO</Typography>
          </MenuItem>
          </Box>
        <Box >
          <MenuItem component={Link} to="/loggin">
          <Typography>LOGGIN</Typography>
          </MenuItem>
          </Box>
          <Box>

          <MenuItem component={Link} to="/registro" >
          <Typography>REGISTRO</Typography>
          </MenuItem>
          </Box>
          <Box>
          <MenuItem component={Link} to="/registro" >
          <Typography>CATÁLOGO</Typography>
          </MenuItem>
          </Box>
          <Box>

          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

          </Search>
          </Box>
          <IconButton sx={{ paddingLeft: '70%' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </IconButton>
        </Toolbar>

        </Container>

    </AppBar>
  );
};
export default ResponsiveAppBar;
