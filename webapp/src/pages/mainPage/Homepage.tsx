import { useEffect, useState } from 'react';
import Productos from '../../components/Productos';
import Carrito from '../../components/carrito/Carrito';
import MenuBar from "../menuBar";
import { Producto } from '../../shared/shareddtypes';
import { getProductos} from '../../api/api';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { ShoppingCart } from '@mui/icons-material';
import "./homepage.css";

function Init(): JSX.Element {

    const [productos, setProductos] = useState<Producto[]>([]);
    
    const [carritoAb, setCarritoAb] = useState(false);
    const [carrito, setCarrito] = useState([] as Producto[]);

    const getTotalItems = (items: Producto[]) => {
        let total = items.reduce((accum: number, prod) => total = accum + prod.cantidad, 0);
        localStorage.setItem("cantidadCarrito",JSON.stringify(total));
    }
    
    
    const handleAñadirAlCarrito = (prod: Producto) => {
        setCarrito(prev => {
            const prodAñadido = prev.find(p => p.id === prod.id)
            if (prodAñadido) {
                return prev.map(p => (
                    p.id === prod.id ? {
                        ...p, cantidad: p.cantidad + 1
                    } : p
                ));

            }
            return [...prev, {...prod, cantidad: 1}];
        });
    };
    const handleEliminarDelCarrito = (id: string) => {
        setCarrito(prev => (
            prev.reduce((accum, p) => {
                if (p.id === id) {
                    if (p.cantidad === 1) {
                        return accum;
                    }
                    return [...accum, {...p, cantidad: p.cantidad - 1}];
                } else {
                    return [...accum, p];
                }
            }, [] as Producto[])
        ));
    };

    async function cargar() {
        setProductos(await getProductos());
    }

    useEffect( () => {
        cargar();
    }, [])


    return (
    <div className="homepage-container">
        <div className="encabezado">
            <MenuBar />
            <h1>AsturShop</h1>
            <Productos productos={productos} handleAñadirAlCarrito={handleAñadirAlCarrito} />
            <SwipeableDrawer anchor="right" open={carritoAb} onOpen={() => setCarritoAb(true)} onClose={() => setCarritoAb(false)}>
                <Carrito 
                    carrito={carrito} 
                    añadirProd={handleAñadirAlCarrito}
                    eliminarProd={handleEliminarDelCarrito} 
                />
            </SwipeableDrawer>
            <IconButton className="botonCarrito" onClick={() => setCarritoAb(true)}>
                <Badge variant="dot" badgeContent={getTotalItems(carrito)} color='error'>
                    <ShoppingCart className="botonCarrito" style={{maxWidth: '70px', maxHeight: '70px', minWidth: '50px', minHeight: '50px'}}/>
                </Badge>            
            </IconButton>
        </div>
    </div>
    );
};

export default Init;
