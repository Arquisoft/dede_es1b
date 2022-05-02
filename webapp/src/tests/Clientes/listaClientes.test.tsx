import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ListaClientes from '../../pages/listaClientes/listaClientes';

test("ClientsList page is rendered", async () => {

    const { getByText} = render(
        <Router>
          <ListaClientes></ListaClientes>
        </Router>
      );
    
    
      expect(getByText("ID")).toBeInTheDocument();
      expect(getByText("WEBID")).toBeInTheDocument();
      expect(getByText("NOMBRE")).toBeInTheDocument();



});