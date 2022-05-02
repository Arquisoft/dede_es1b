import { render } from "@testing-library/react";
import Menubar from '../../pages/menuBarAdmin';
import { BrowserRouter as Router } from "react-router-dom";
test('MenuBarAdmin render',async()=>{

    const { getByText } = render(<Router><Menubar></Menubar></Router>);

        
           
        expect(getByText("Lista de clientes")).toBeInTheDocument();
        expect(getByText("Gestión productos")).toBeInTheDocument();
        expect(getByText("Gestión pedidos")).toBeInTheDocument();
      
            
      
    

    
    


});