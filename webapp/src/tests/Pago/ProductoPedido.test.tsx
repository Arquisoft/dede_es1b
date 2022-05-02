import { render } from "@testing-library/react";
import ProductoPedido from '../../components/pago/ProductoPedido';

test('ProductoPedido render', ()=>{
    const component = render(<ProductoPedido
        cantidad={9}
        imagen={''}
        nombre={'Producto de prueba'}
        precio={8}/>);
    expect(component.container).toHaveTextContent('Producto de prueba');
});