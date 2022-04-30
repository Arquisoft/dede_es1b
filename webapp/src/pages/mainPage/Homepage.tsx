import { useEffect, useState } from 'react';
import Productos from '../../components/Productos';
import Carrito from '../../components/carrito/Carrito';
import MenuBar from "../menuBar";
import { Producto,ProductoPago } from '../../shared/shareddtypes';
import { getProductos, getProductosActivos} from '../../api/api';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { ShoppingCart } from '@mui/icons-material';
import "./homepage.css";

function Init(): JSX.Element {

    const [productos, setProductos] = useState<ProductoPago[]>([]);
    
    const [carritoAb, setCarritoAb] = useState(false);
    const [carrito, setCarrito] = useState([] as ProductoPago[]);

    const getTotalItems = (items: ProductoPago[]) => {

        let total=0;
        total = items.reduce((accum: number, prod) => accum + prod.cantidad, 0);
        console.log("iwu  "+total);


        localStorage.setItem("cantidadCarrito",JSON.stringify(total));
    }
    
    const handleAñadirAlCarrito = (prod: ProductoPago) => {
        getTotalItems(carrito);
        let res;
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
        getTotalItems(carrito);
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
            }, [] as ProductoPago[])
        ));
    };

    async function cargar() {
        setProductos(await getProductosActivos());
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

                <ShoppingCart className="botonCarrito" style={{maxWidth: '70px', maxHeight: '70px', minWidth: '50px', minHeight: '50px'}}/>           

            </IconButton>
        </div>
    </div>
    );
};

export default Init;
