import { render, fireEvent, act } from "@testing-library/react";
import Menubar from '../../pages/menuBarAdmin';
import { BrowserRouter as Router } from "react-router-dom";
import SessionProvider from  "@inrupt/solid-ui-react";
test('MenuBarAdmin render',async()=>{

    const { getByText } = render(<Router><Menubar></Menubar></Router>);

        
           
        expect(getByText("Lista de clientes")).toBeInTheDocument();
        expect(getByText("Gestión productos")).toBeInTheDocument();
        expect(getByText("Gestión pedidos")).toBeInTheDocument();
      
            
      
    

    
    


});