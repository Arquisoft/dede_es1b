import { render, fireEvent, act } from "@testing-library/react";
import Menubar from '../../pages/menuBar';
import { BrowserRouter as Router } from "react-router-dom";



test('MenuBar render',async()=>{

    const { getByText } = render(<Router><Menubar></Menubar></Router>);
        
           
        expect(getByText("INICIO")).toBeInTheDocument();
        expect(getByText("CATÁLOGO")).toBeInTheDocument();
        expect(getByText("AYUDA")).toBeInTheDocument();

});