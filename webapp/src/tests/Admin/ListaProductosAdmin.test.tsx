import { render } from "@testing-library/react";
import ListaProductosAdmin from '../../pages/admin/listaProductosAdmin/listaProductosAdmin';
import { BrowserRouter as Router } from "react-router-dom";

test('ListaProductosAdmin render', ()=>{
    const component = render(<Router><ListaProductosAdmin/></Router>);
    expect(component.container).toHaveTextContent('Lista de productos');
});