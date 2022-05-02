import { render } from "@testing-library/react";
import PagoFinalizado from '../../pages/pagoPage/PagoFinalizado';
import { BrowserRouter as Router } from "react-router-dom";



test('ListaPedidos render',async()=>{

    const { getByText } = render(<Router><PagoFinalizado></PagoFinalizado></Router>);
        
           
        expect(getByText("Pago finalizado")).toBeInTheDocument();
        expect(getByText("¡Muchas gracias por su compra!")).toBeInTheDocument();
        expect(getByText("Volver a la tienda")).toBeInTheDocument();
     
      


});