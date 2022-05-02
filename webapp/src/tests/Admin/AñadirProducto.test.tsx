import { render } from "@testing-library/react";
import Step1 from '../../pages/admin/gestionProductos/añadirProducto/Step1';
import Step2 from '../../pages/admin/gestionProductos/añadirProducto/Step2';

test('AñadirProducto paso 1 render', ()=>{
    const component = render(<Step1/>);
    expect(component.container).toHaveTextContent('INSERTAR CATEGORÍA');
});

test('AñadirProducto paso 2 render', ()=>{
    const component = render(<Step2/>);
    expect(component.container).toHaveTextContent('DESCRIPCIÓN');
});