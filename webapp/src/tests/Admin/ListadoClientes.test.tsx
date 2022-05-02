import { render } from "@testing-library/react";
import Step1 from '../../pages/admin/gestionPedidos/listadoPorUsuario/step1PedidosPorUsuario';
import Step2PedidosUsuario from '../../pages/admin/gestionPedidos/listadoPorUsuario/step2';

test('ListarClientes paso 1 render', ()=>{
    const component = render(<Step1/>);
    expect(component.container).toHaveTextContent('INSERTAR ID USUARIO');
});

test('ListarClientes paso 2 render', ()=>{
    const component = render(<Step2PedidosUsuario/>);
    expect(component.container).toHaveTextContent('Lista de pedidos');
});