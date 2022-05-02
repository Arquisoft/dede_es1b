import { render } from "@testing-library/react";
import Carrito from '../../components/carrito/Carrito';
import { BrowserRouter as Router } from "react-router-dom";
import { Producto } from '../../shared/shareddtypes';

test('Carrito render', ()=>{
    let carritoPrueba:Producto[] = [];

    const component = render(<Router><Carrito
        carrito={carritoPrueba}
        añadirProd={function():void{}}
        eliminarProd={function():void{}}/></Router>);
    expect(component.container).toHaveTextContent('Carrito de la compra');
    expect(component.container).toHaveTextContent('Total');
});