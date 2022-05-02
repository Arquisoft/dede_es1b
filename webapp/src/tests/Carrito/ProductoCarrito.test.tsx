import { render } from "@testing-library/react";
import ProductoCarrito from '../../components/carrito/ProductoCarrito';
import { Producto } from '../../shared/shareddtypes';

test('ProductoCarrito render', ()=>{
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

    const component = render(<ProductoCarrito
        producto={prod}
        añadirProd={function():void{}}
        eliminarProd={function():void{}}/>);
    expect(component.container).toHaveTextContent('Producto de prueba');
});