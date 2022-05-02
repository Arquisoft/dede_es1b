import { render } from "@testing-library/react";
import CardProducto from '../../pages/mainPage/CardProducto';
import { BrowserRouter as Router } from "react-router-dom";
import { Producto } from '../../shared/shareddtypes';

test('CardProducto render', ()=>{
    let prod:Producto = {
        cantidad: 0,
        descripcion: '',
        estado: true,
        id: '',
        imagen: '',
        name: 'Producto de prueba',
        nventas: 0,
        precio: 0,
        tipo: ''
    };

    const component = render(<Router><CardProducto
        producto={prod}
        handleAñadirAlCarrito={function():void{}}/></Router>);
    expect(component.container).toHaveTextContent('Producto de prueba');
});

test('CardProducto render b', ()=>{
    let prod:Producto = {
        cantidad: 0,
        descripcion: '',
        estado: true,
        id: '',
        imagen: '',
        name: 'Producto de prueba',
        nventas: 0,
        precio: 0,
        tipo: ''
    };

    const component = render(<Router><CardProducto
        producto={prod}
        handleAñadirAlCarrito={function():void{}}/></Router>);
    expect(component.container).toHaveTextContent('VER DETALLES');
});