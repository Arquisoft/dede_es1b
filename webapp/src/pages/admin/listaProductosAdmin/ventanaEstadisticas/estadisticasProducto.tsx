import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { getProductos, getUsers } from '../../../../api/api';
import { deleteProduct } from '../../../../api/api';
import { reactivarProducto,getNVentas } from '../../../../api/api';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Producto } from '../../../../shared/shareddtypes';
import { getProductoPorID } from '../../../../api/api';
import MenuBar from "../../../menuBarAdmin";

function EstadisticasProducto(): JSX.Element {
    
  const[producto, setProducto] = useState<Producto>();
  const[nventas, setNVentas] = useState<Number>();
  const[precio, setPrecio] = useState<Number>();

  const {id} = useParams();

  console.log(id);
    const navigate = useNavigate();
    let ganancias:number=0;
    async function cargar() {
      let p:Producto = await getProductoPorID(id!);
      if(p!=null){
        setNVentas(p.nventas);
        setPrecio(p.precio);
       // ganancias=nventas*precio;
      }
    }
    useEffect( () => {
      cargar();
    }, [])

      return (
        <>      
        <MenuBar/>  <br></br>
        <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia className="foto" sx={{ m: "10rm", mx:'auto'}}
            component="img"
            style={{height:"220px",width:'auto'}}
            image={"./iconoCarrito.png"}
            
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              NÚMERO DE VENTAS
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {nventas}
            </Typography>
          </CardContent>
        </Box>
        
      </Card>

      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia className="foto" sx={{ m: "10rm", mx:'auto'}}
            component="img"
            style={{height:"220px",width:'auto'}}
            image={"./iconoCarrito.png"}
            
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              GANANCIAS GENERADAS
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">

            </Typography>
          </CardContent>
        </Box>
        

      </Card>
      </>

      )
          } 
export default EstadisticasProducto;



