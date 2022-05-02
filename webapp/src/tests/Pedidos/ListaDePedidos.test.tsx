import { render, fireEvent, act } from "@testing-library/react";
import ListaPedidos from '../../pages/gestionMisPedidos/listaPedidos';
import { BrowserRouter as Router } from "react-router-dom";



test('ListaPedidos render',async()=>{

    const { getByText } = render(<Router><ListaPedidos></ListaPedidos></Router>);
        
           
        expect(getByText("Estos son tus pedidos:")).toBeInTheDocument();
        expect(getByText("Correo")).toBeInTheDocument();
        expect(getByText("Id")).toBeInTheDocument();
        expect(getByText("Direccion")).toBeInTheDocument();
        expect(getByText("Precio Total")).toBeInTheDocument();
      


});