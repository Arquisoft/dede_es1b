import { render,getByTestId,fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import GestionProductos from '../../pages/admin/gestionProductos/gestionProductos';

test("GestionProductos page is rendered", async () => {

    const { getByText} = render(
        <Router>
          <GestionProductos></GestionProductos>
        </Router>
      );
    
    
      expect(getByText("GESTIÓN PRODUCTOS")).toBeInTheDocument();
      expect(getByText("Modificar producto")).toBeInTheDocument();
      expect(getByText("Buscar por ID")).toBeInTheDocument();
      expect(getByText("Listado")).toBeInTheDocument();

});
      
      test("Click on Añadir producto", async () => {
        const { container } = render(
            <Router>
            <GestionProductos></GestionProductos>
          </Router>
        );
      
        const addButton = getByTestId(container, "boton-añadir-producto");
        fireEvent.click(addButton);
        expect(window.location.pathname).toBe("/productos/add");
      });
      test("Click on Modificar producto", async () => {
        const { container } = render(
            <Router>
            <GestionProductos></GestionProductos>
          </Router>
        );
      
        const addButton = getByTestId(container, "boton-modificar-producto");
        fireEvent.click(addButton);
        expect(window.location.pathname).toBe("/productos/add");
      });

    
      test("Click on Listado", async () => {
        const { container } = render(
            <Router>
            <GestionProductos></GestionProductos>
          </Router>
        );
      
        const addButton = getByTestId(container, "boton-listar-producto");
        fireEvent.click(addButton);
        expect(window.location.pathname).toBe("/productos/list");
      });


